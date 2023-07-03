import {useState} from "react";
import {todoStore} from "../stores/todo.ts";

function TodoInput() {
  const [value, setValue] = useState("");

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <button
        onClick={() => {
          const prevTodos = todoStore.getState();
          todoStore.setState([...prevTodos, {id: prevTodos.length, content: 'hi-0'}]);
          setValue("");
        }}
      >
        추가
      </button>
    </>
  );
}

export default TodoInput;
