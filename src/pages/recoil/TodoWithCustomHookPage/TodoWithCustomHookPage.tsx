import {useTodo} from "./useTodo.ts";

function TodoWithCustomHookPage() {
  const {
    todoList, loadTodoList, changeCheckbox, deleteTodo
  } = useTodo();

  return (
    <>
      <button onClick={loadTodoList}>할 일 불러오기</button>
      {
        todoList.map((todo) => (
          <div key={todo.id} style={{display: 'flex'}}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => changeCheckbox(todo.id)}
            />
            <div>{todo.title}</div>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </div>
        ))
      }
    </>
  );
}

export default TodoWithCustomHookPage;

