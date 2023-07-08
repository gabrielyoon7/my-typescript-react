import TodoList from "./TodoList.tsx";
import TodoInput from "./TodoInput.tsx";

function TodoRoot() {
  return (
    <div>
      <TodoInput/>
      <hr/>
      <TodoList/>
    </div>
  );
}

export default TodoRoot;
