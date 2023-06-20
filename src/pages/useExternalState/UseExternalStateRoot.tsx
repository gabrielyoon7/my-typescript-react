import TodoContainer from "./components/TodoContainer.tsx";

function UseExternalStateRoot() {
  return (
    <>
      <h1>미완성</h1>
      <TodoContainer/>
      <hr/>
      <TodoContainer/>
      <hr/>
    </>
  );
}

export default UseExternalStateRoot;
