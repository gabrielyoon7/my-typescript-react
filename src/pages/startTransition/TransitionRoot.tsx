import NotStartTransition from "./button/NotStartTransition";
import StartTransition from "./button/StartTransition";
import NotStartTransitionPickColor from "./colorPicker/NotStartTransitionPickColor";
import StartTransitionPickColor from "./colorPicker/StartTransitionPickColor";

function TransitionRoot() {
  return (
    <>
      <h1>startTransition for button click: 버튼을 마구 연타해보세요</h1>
      <h2>일반 컴포넌트</h2>
      <NotStartTransition />
      <h2>트랜지션이 발생하는 컴포넌트</h2>
      <StartTransition />
      <h1>startTransition for color picker : 색상 선택기를 드래그 해보세요</h1>
      <h2>일반 컴포넌트</h2>
      <NotStartTransitionPickColor />
      <h2>트랜지션이 발생하는 컴포넌트</h2>
      <StartTransitionPickColor />
    </>
  )
}

export default TransitionRoot;
