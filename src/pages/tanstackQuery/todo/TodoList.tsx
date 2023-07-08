import {useQuery} from "@tanstack/react-query";
import {TodoItem} from "../types.ts";
import {useTodo} from "./useTodo.ts";

function TodoList() {
  const {isLoading, data} = useTodo();

  const todoList: TodoItem[] = data;

  if (isLoading) {
    return (
      <div>⌛️</div>
    );
  }

  return (
    <div>
      {
        todoList.length === 0
          ? <div>할 일이 없습니다.</div>
          : todoList.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
          ))
      }
    </div>
  );
}

export default TodoList;
