import Child from "./Child"
import Wrapper from "./Wrapper"

const WrapperRoot = () => {
  return (
    <>
      <Wrapper></Wrapper>
      <hr />
      <Wrapper>hi</Wrapper>
      <hr />
      <Wrapper><>hi</></Wrapper>
      <hr />
      <Wrapper><>hi</><>hi</></Wrapper>
      <hr />
      <Wrapper><div>hi</div></Wrapper>
      <hr />
      <Wrapper><Child /></Wrapper>
      <hr />
    </>
  )
}

export default WrapperRoot
