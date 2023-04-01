import { useState } from "react"

function ItemArray() {
  const [list, setList] = useState<string[]>([]);

  const addItem = () => {
    setList(list.concat(`Item ${list.length}`));
  }
  const removeItem = () => {
    setList(list.filter((el) => el !== list[list.length - 1]));
  }

  return (
    <>
      <ul>
        {list.map((el) => <li key={el}>{el}</li>)}
      </ul>
      <button onClick={() => addItem()}>추가</button>
      <button onClick={() => removeItem()}>삭제</button>
    </>
  )
}
export default ItemArray;
