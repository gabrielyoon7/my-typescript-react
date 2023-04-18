import Counter from "./Counter"
import MemoizedCounter from "./MemoizedCounter"

/* eslint-disable import/no-anonymous-default-export */
export default () => {
  return (
    <>
      <Counter />
      <hr />
      <MemoizedCounter />
      <hr />
    </>
  )
}
