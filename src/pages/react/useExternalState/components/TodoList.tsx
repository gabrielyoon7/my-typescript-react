import {todoStore} from "../stores/todo.ts";
import {useExternalState} from "../x-state";

function TodoList() {
  const [todoList, setTodoList] = useExternalState(todoStore);

  return (
    <div>
      <button onClick={() => setTodoList([])}>모두 삭제</button>
      {todoList.map(todo => (
        <div key={todo.id}>
          {todo.content}
          <button
            onClick={() => {
              const nextTodos = todoList.filter(prevTodo => prevTodo.id !== todo.id);
              setTodoList(nextTodos);
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
