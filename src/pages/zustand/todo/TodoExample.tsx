import TodoViewer from "./TodoViewer.tsx";
import TodoAddButton from "./TodoAddButton.tsx";

function TodoExample() {

  return (
    <>
      <h2>Todo</h2>
      <TodoAddButton/>
      <TodoViewer/>
    </>
  );
}

export default TodoExample;
