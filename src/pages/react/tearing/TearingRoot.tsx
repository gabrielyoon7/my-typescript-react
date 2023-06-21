import NotTearing from "./NotTearing.tsx";
import Tearing from "./Tearing.tsx";

function TearingRoot() {
  return (
    <>
      <div><h1>티어링 (버튼 클릭 후 마우스 요리조리 움직이기)</h1></div>
      <div><h2>일반 컴포넌트</h2></div>
      <NotTearing/>
      <hr/>
      <div><h2>티어링이 발생하는 컴포넌트</h2></div>
      <Tearing/>
    </>
  );
}

export default TearingRoot;
