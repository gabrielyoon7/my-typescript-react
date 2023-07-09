import TodoList from "./TodoList.tsx";
import TodoInput from "./TodoInput.tsx";
import TodoCount from "./TodoCount.tsx";

function TodoRoot() {
  return (
    <div>
      <TodoInput/>
      <hr/>
      <TodoCount/>
      <hr/>
      <TodoList/>
    </div>
  );
}

export default TodoRoot;
