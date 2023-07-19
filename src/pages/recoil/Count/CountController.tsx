import {useRecoilState} from "recoil";
import {count123Store} from "./atom.ts";

function CountController() {
  const [count, setCount] = useRecoilState(count123Store);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => console.log(`current count value: ${count}`)}>현재 값은?</button>
    </div>
  );
}

export default CountController;
