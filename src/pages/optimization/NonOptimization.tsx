import { memo, useState } from "react";

function Box() {
  console.log('Box 렌더링 됨')
  return (
    <div style={{ width: "100px", height: "100px", margin: '3px', backgroundColor: 'red' }} />
  )
}

const MemoedBox = memo(Box);

function NonOptimization() {
  const [appRenderCount, setAppRenderCount] = useState(0);

  console.log(`랜더링 횟수 : ${appRenderCount}`);

  return (
    <>
      <MemoedBox />
      <button
        onClick={() => setAppRenderCount(appRenderCount + 1)}
      >
        앱 다시 렌더링 하기
      </button>
    </>
  )
}

export default NonOptimization;
