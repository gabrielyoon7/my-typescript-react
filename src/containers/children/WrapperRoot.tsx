import Child from "./Child"
import Wrapper from "./Wrapper"

/* eslint-disable import/no-anonymous-default-export */
export default () => {
  return (
    <>
      <Wrapper></Wrapper>
      <hr />
      <Wrapper>hi</Wrapper>
      <hr />
      <Wrapper><Child /></Wrapper>
      <hr />
    </>
  )
}
