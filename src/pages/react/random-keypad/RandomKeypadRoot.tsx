import Keypad from "./Keypad.tsx";
import './styles.css';
import {useState} from "react";

function RandomKeypadRoot() {
  const [numbers, setNumbers] = useState<number[]>([]);

  return (
    <>
      <div>selected: {JSON.stringify(numbers)}</div>
      <Keypad numbers={numbers} setNumbers={setNumbers} maxLength={6}/>
    </>
  );
}

export default RandomKeypadRoot;
