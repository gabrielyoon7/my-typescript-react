import Child from "./Child.tsx";
import Wrapper from "./Wrapper.tsx";

const WrapperRoot = () => {
  return (
    <>
      <Wrapper></Wrapper>
      <hr/>
      <Wrapper>hi</Wrapper>
      <hr/>
      <Wrapper><>hi</>
      </Wrapper>
      <hr/>
      <Wrapper><>hi</>
        <>hi</>
      </Wrapper>
      <hr/>
      <Wrapper>
        <div>hi</div>
      </Wrapper>
      <hr/>
      <Wrapper><Child/></Wrapper>
      <hr/>
    </>
  );
};

export default WrapperRoot;
