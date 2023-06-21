import {useExternalState} from "../xState/hooks/hooks.ts";
import {todoActions, todoStore} from "../stores/todo.ts";

function TodoList() {
  const [todoList, setTodoList] = useExternalState(todoStore);

  return (
    <div>
      <button onClick={() => setTodoList([])}>모두 삭제</button>
      {todoList.map(todo => (
        <div key={todo.id}>
          {todo.content}
          <button
            onClick={() => todoActions.deleteTodo(todo.id)}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;