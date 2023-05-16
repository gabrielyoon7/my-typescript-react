import NotStartTransition from "./NotStartTransition";
import StartTransition from "./StartTransition";

function TransitionRoot() {
  return (
    <>
      <h1>startTransition : 버튼을 마구 연타해보세요</h1>
      <h2>일반 컴포넌트</h2>
      <NotStartTransition />
      <h2>트랜지션이 발생하는 컴포넌트</h2>
      <StartTransition />
    </>
  )
}

export default TransitionRoot;
