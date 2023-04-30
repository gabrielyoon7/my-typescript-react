import { useState } from "react"

interface Item {
  id: number;
  text: string;
}

function ItemObjectArray() {

  const [list, setList] = useState<Item[]>([]);

  const addItem = () => {
    setList(list.concat({
      id: list.length,
      text: `Item ${list.length}`
    }));
  }
  const removeItem = () => {
    setList(list.filter((el) => el !== list[list.length - 1]));
  }

  return (
    <>
      <ul>
        {list.map((el) => <li key={el.id}>{el.text}</li>)}
      </ul>
      <button onClick={() => addItem()}>추가</button>
      <button onClick={() => removeItem()}>삭제</button>
    </>
  )
}
export default ItemObjectArray;
