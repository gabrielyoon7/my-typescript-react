import {useRecoilValue} from "recoil";
import {count123Store} from "./atom.ts";

function CountValue() {
  const value = useRecoilValue(count123Store);

  console.log("CountValue: ", value);
  return (
    <>
      <div>{value}</div>
    </>
  );
}

export default CountValue;
