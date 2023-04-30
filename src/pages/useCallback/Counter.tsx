import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>useCallback Count: {count}</h1>
      <button onClick={increment}>증가</button>
    </div>
  );
}
export default Counter;
