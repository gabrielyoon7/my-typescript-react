import {useState} from "react";
import {todoActions} from "../stores/todo.ts";

function TodoInput() {
  const [value, setValue] = useState("");

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <button
        onClick={() => {
          console.log(`repository.addTodo(value)를 해줄 위치: ${value}`);
          todoActions.addTodo(value);
          setValue("");
        }}
      >
        추가
      </button>
    </>
  );
}

export default TodoInput;
