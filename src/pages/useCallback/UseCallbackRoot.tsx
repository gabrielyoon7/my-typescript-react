import Counter from "./Counter";
import MemoizedCounter from "./MemoizedCounter";

export default () => {
  return (
    <>
      <Counter />
      <hr />
      <MemoizedCounter />
      <hr />
    </>
  );
};
