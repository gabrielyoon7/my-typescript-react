import { ChangeEvent, useState } from "react";

function PickColor() {
  const [value, setValue] = useState('#000000');
  const [count, setCount] = useState(0);

  const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setCount(prevCount => prevCount + 1); // use functional update
  }

  console.log(count);

  return (
    <div>
      <div>RGB: {value} / count: {count}</div>
      <input type='color' value={value} onChange={changeColor} />
    </div>
  )
}

export default PickColor;
