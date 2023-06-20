import useExternalState from "../utils/hooks/useExternalStore.ts";
import {todoStore} from "../stores/todoStore.ts";

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
