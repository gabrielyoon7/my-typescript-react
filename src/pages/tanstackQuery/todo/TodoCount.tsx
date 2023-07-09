import {useTodo} from "./useTodo.ts";
import {TodoItem} from "../types.ts";

function TodoCount() {
  const {isLoading, data} = useTodo();

  const todoList: TodoItem[] = data;

  if (isLoading) {
    return (
      <div>⌛️</div>
    );
  }

  return (
    <div>
      현재 등록 된 일정 : {todoList.length} 개
    </div>
  );
}

export default TodoCount;
