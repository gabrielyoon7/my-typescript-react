import Counter from "./Counter.tsx";
import MemoizedCounter from "./MemoizedCounter.tsx";

export default () => {
  return (
    <>
      <Counter/>
      <hr/>
      <MemoizedCounter/>
      <hr/>
    </>
  );
};
