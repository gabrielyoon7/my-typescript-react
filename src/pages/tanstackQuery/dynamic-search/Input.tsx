import {useState} from "react";

function Input() {
  const [value, setValue] = useState("");
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
    </>
  );
}

export default Input;
