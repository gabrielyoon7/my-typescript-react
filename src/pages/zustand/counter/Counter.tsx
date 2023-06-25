import {useStore} from "./useStore.tsx";

function Counter() {
  const {count, inc} = useStore();

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}

export default Counter;
