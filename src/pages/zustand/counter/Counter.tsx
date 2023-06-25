import {useCounter} from "./useCounter.tsx";

function Counter() {
  const {count, inc} = useCounter();

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}

export default Counter;
