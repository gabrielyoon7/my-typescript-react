import {useTodo} from "./useTodo.ts";

function TodoViewer() {
  const {todos} = useTodo();
  if (todos.length === 0) {
    return <div>할 일이 비어있습니다.</div>;
  }
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.content}
        </div>
      ))}
    </>
  );
}

export default TodoViewer;
