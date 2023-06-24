import {useTodo} from "./useTodo.ts";

function TodoAddButton() {
  const {todos, addTodo} = useTodo();
  return (
    <>
      <button onClick={() => addTodo(todos.length)}>추가</button>
    </>
  );
}

export default TodoAddButton;
