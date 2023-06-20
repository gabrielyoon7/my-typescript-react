import useExternalState from "../xState/hooks/useExternalState.ts";
import {todoStore} from "../stores/todo.ts";

function TodoList() {
  const [todoList, setTodoList] = useExternalState(todoStore);

  return (
    <div>
      <button onClick={() => setTodoList([])}>모두 삭제</button>
      {todoList.map(todo => (
        <div key={todo.id}>
          {todo.content}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
