import {useQuery} from "@tanstack/react-query";
import {TodoItem} from "../types.ts";

function TodoList() {
  const {isLoading, data} = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('/tanstack-query/todo').then(
        (res) => res.json(),
      ),
  });

  const todoList: TodoItem[] = data;

  if (isLoading) {
    return (
      <div>⌛️</div>
    );
  }

  return (
    <div>
      {
        todoList.length === 0
          ? <div>할 일이 없습니다.</div>
          : todoList.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
          ))
      }
    </div>
  );
}

export default TodoList;
