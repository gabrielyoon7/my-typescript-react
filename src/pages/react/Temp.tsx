/**
 * 컴포넌트 하나만 테스트 할 때 사용
 */

import { memo, useCallback, useMemo, useState } from "react";

function Box({ params, onClick }: {
  params: { color: string },
  onClick: () => void
}) {
  console.log('Box 렌더링 됨');
  return (
    <div
      style={{ width: "100px", height: "100px", margin: '3px', backgroundColor: params.color }}
      onClick={onClick}
    />
  );
}
const MemoedBox = memo(Box);

function Temp() {
  const [appRenderCount, setAppRenderCount] = useState(0);
  const [color, setColor] = useState('red');

  const params = useMemo(() => ({ color }), [color]);
  const onClick = useCallback(() => { }, []);
  console.log(`렌더링 횟수: ${appRenderCount}`);

  return (
    <>
      <MemoedBox params={params} onClick={onClick} />
      <button onClick={() => setAppRenderCount(appRenderCount + 1)}>
        앱 다시 렌더링 하기
      </button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        색상 바꾸기
      </button>
    </>
  );
}

export default Temp;
