import NormalInput from "./NormalInput.tsx";
import TransitionedInput from "./TransitionedInput.tsx";
import StartTransitionedInput from "./StartTransitionedInput.tsx";
import FetchInput from "./FetchInput.tsx";

export default () => {
  return (
    <>
      <h1>
        useTransition 예제
      </h1>
      <div>평가 우선 순위를 낮추기?</div>
      <hr />
      <h2>일반적인 컴포넌트</h2>
      <NormalInput />
      <hr />
      <h2>Fetch 컴포넌트 (정상적으로 동작하지 않음)</h2>
      <FetchInput />
      <hr />
      <h2>트랜지션 처리된 컴포넌트</h2>
      <h3>로딩 없이 단순한 트랜지션 (startTransition)</h3>
      <StartTransitionedInput />
      <h3>로딩을 적용해본 트랜지션 (useTransition)</h3>
      <TransitionedInput />
    </>
  );
};
