import AnotherApp from "./AnotherApp.tsx";
import TodosApp from "./TodoApp.tsx";

export default () => {
  return (
    <>
      <h1>
        useSyncExternalStore 예제
      </h1>
      <div>여러 컴포넌트에서 외부 상태의 접근</div>
      <TodosApp/>
      <AnotherApp/>
    </>
  );
};
