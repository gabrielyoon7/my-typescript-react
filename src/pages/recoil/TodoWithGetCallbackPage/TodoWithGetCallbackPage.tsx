import {useRecoilValue} from "recoil";
import {todoRepository} from "./todoRepository.ts";
import {todoListState} from "../todo.ts";

function TodoWithGetCallbackPage() {
  const todoList = useRecoilValue(todoListState);
  const {
    loadTodoList, updateCheckboxChange, deleteTodo
  } = useRecoilValue(todoRepository);

  return (
    <>
      <button onClick={loadTodoList}>할 일 불러오기</button>
      {
        todoList.map((todo) => (
          <div key={todo.id} style={{display: 'flex'}}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => updateCheckboxChange(todo.id)}
            />
            <div>{todo.title}</div>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </div>
        ))
      }
    </>
  );
}

export default TodoWithGetCallbackPage;
