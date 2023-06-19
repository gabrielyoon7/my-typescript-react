import {Todo} from "../types/types.ts";

function TodoList() {
  const todoList: Todo[] = [
    {id: 0, content: 'hi-0'},
    {id: 1, content: 'hi-1'},
  ]; // 이전 예정
  
  return (
    <>
      {todoList.map(todo => (
        <div key={todo.id}>
          {todo.content}
        </div>
      ))}
    </>
  );
}

export default TodoList;
