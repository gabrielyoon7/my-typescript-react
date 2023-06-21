import { ChangeEvent, useState } from "react";

function NormalInput() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const LIST_SIZE = 20000;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    const temp: string[] = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      temp.push(e.target.value);
      setList(temp);
    }
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
}

export default NormalInput;
