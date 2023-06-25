import TodoExample from "./TodoExample.tsx";
import Counter from "../counter/Counter.tsx";

function TodoRoot() {
  return (
    <>
      <h3>Counter Example</h3>
      <Counter/>
      <hr/>
      <hr/>
      <TodoExample/>
      <hr/>
      <TodoExample/>
      <hr/>
    </>
  );
}

export default TodoRoot;
