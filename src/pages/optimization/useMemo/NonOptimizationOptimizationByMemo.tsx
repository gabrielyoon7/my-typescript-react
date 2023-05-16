import { memo, useState } from "react";

function Box({ params }: {
  params: { color: string }
}) {
  console.log(`Box 렌더링 됨 : ${params.color}`)
  return (
    <div style={{ width: "100px", height: "100px", margin: '3px', backgroundColor: params.color }} />
  )
}

const MemoedBox = memo(Box);

function NonOptimizationByMemo() {
  const [appRenderCount, setAppRenderCount] = useState(0);
  const [color, setColor] = useState('red');

  console.log(`랜더링 횟수 : ${appRenderCount}`);

  return (
    <>
      <MemoedBox params={{ color }} />
      <button
        onClick={() => setAppRenderCount(appRenderCount + 1)}
      >
        앱 다시 렌더링 하기
      </button>
      <button
        onClick={() => setColor(color === 'red' ? 'blue' : 'red')}
      >
        색상 바꾸기
      </button>
    </>
  )
}

export default NonOptimizationByMemo;
