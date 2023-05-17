import { ChangeEvent, memo, useState } from "react";

function Box({ color }: { color: string }) {
  console.log(`rendered: ${color}`)
  return (
    <div style={{ height: '100px', width: '100px', margin: '5px', backgroundColor: color }}></div>
  )
}

const MemoedBox = memo(Box);

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

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>RGB: {value} / count: {count}</div>
        <input type='color' value={value} onChange={changeColor} />
      </div>
      <div>
        <MemoedBox color={value} />
        <MemoedBox color="red" />
      </div>
    </div>
  )
}

export default PickColor;
