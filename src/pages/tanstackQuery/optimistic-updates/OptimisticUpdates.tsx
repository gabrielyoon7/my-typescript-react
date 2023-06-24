import * as React from 'react';
import axios from 'axios';

import {
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query';
import {Todos} from "./types.ts";


async function fetchTodos(): Promise<Todos> {
  const res = await axios.get('/api/data');
  return res.data;
}

function useTodos() {
  return useQuery({queryKey: ['todos'], queryFn: fetchTodos});
}

export default function OptimisticUpdates() {
  const queryClient = useQueryClient();
  const [text, setText] = React.useState('');
  const {isFetching, ...queryInfo} = useTodos();

  const addTodoMutation = useMutation({
    mutationFn: (newTodo) => axios.post('/api/data', {text: newTodo}),
    // When mutate is called:
    onMutate: async (newTodo: string) => {
      setText('');
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({queryKey: ['todos']});

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<Todos>(['todos']);

      // Optimistically update to the new value
      if (previousTodos) {
        queryClient.setQueryData<Todos>(['todos'], {
          ...previousTodos,
          items: [
            ...previousTodos.items,
            {id: Math.random().toString(), text: newTodo},
          ],
        });
      }

      return {previousTodos};
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<Todos>(['todos'], context.previousTodos);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  return (
    <div>
      <p>
        이 예제에서는 mutation을 사용하여 새 항목을 만들 수 있습니다.
        서버가 항목을 수락하기를 바라며 새 항목이 목록에 낙관적으로 추가됩니다.
        이 경우 목록은 목록의 실제 항목으로 다시 가져옵니다.
        가끔은 돌연변이가 실패할 수도 있습니다. 실패하는 경우 이전 항목 목록이 복원되고 서버에서 목록을 다시 가져옵니다.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodoMutation.mutate(text);
        }}
      >
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button disabled={addTodoMutation.isLoading}>Create</button>
      </form>
      <br/>
      {queryInfo.isSuccess && (
        <>
          <div>
            {/* The type of queryInfo.data will be narrowed because we check for isSuccess first */}
            Updated At: {new Date(queryInfo.data.ts).toLocaleTimeString()}
          </div>
          <ul>
            {queryInfo.data.items.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
          {isFetching && <div>Updating in background...</div>}
        </>
      )}
      {queryInfo.isLoading && 'Loading'}
      {queryInfo.error instanceof Error && queryInfo.error.message}
    </div>
  );
}
