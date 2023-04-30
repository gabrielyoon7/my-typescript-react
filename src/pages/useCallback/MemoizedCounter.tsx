import React, { useState, useCallback } from 'react';

function Child({ count, handleClick }: { count: number, handleClick: () => void }) {
  console.log('Child is rendering');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>증가증가</button>
    </div>
  );
}

const MemoizedChild = React.memo(Child);

function MemoizedCounter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  return (
    <div>
      <h2>Memo와 함께 쓴 useCallback Counter</h2>
      <p>클릭한 횟수 : {count}</p>
      <MemoizedChild count={count} handleClick={handleClick} />
    </div>
  );
}
export default MemoizedCounter;
