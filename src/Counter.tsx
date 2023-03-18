import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  function increment(): void {
    setCount(count + 1);
  }

  function decrement(): void {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  );
}

export default Counter;
