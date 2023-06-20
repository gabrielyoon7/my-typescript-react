import {useState} from "react";

function TodoInput() {
  const [value, setValue] = useState("");

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => {
        console.log(`repository.addTodo(value)를 해줄 위치: ${value}`);
      }}>추가
      </button>
    </>
  );
}

export default TodoInput;
