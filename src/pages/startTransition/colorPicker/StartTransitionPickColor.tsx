import { ChangeEvent, startTransition, useState } from "react";

function Box({ color }: { color: string }) {
  console.log(`rendered: ${color}`)
  return (
    <div style={{ height: '100px', width: '100px', margin: '5px', backgroundColor: color }}></div>
  )
}

function StartTransitionPickColor() {
  const [value, setValue] = useState('#000000');
  const [count, setCount] = useState(0);

  const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setValue(e.target.value);
      setCount(prevCount => prevCount + 1); // use functional update
    });
    // 딜레이 유발
    for (let i = 0; i < 1000000000; i++) { }
  }

  console.log(count);

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>RGB: {value} / count: {count}</div>
        <input type='color' value={value} onChange={changeColor} />
      </div>
      <div>
        <Box color={value} />
      </div>
    </div>
  )
}

export default StartTransitionPickColor;
