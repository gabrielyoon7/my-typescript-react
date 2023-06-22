import {useRecoilCallback, useRecoilValue} from "recoil";
import {todoListState} from "../todo.ts";

function TodoWithUseRecoilCallbackPage() {
  const todoList = useRecoilValue(todoListState);

  const loadTodoList = useRecoilCallback(({set}) => async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    set(todoListState, data);
  }, []);

  const handleCheckboxChange = useRecoilCallback(({set, snapshot}) => async (todoId) => {
    const todos = await snapshot.getPromise(todoListState);
    set(todoListState, todos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo));
  }, []);

  const handleDelete = useRecoilCallback(({set, snapshot}) => async (todoId) => {
    const todos = await snapshot.getPromise(todoListState);
    set(todoListState, todos.filter((todo) => todo.id !== todoId));
  }, []);

  return (
    <>
      <button onClick={loadTodoList}>할 일 불러오기</button>
      {
        todoList.map((todo) => (
          <div key={todo.id} style={{display: 'flex'}}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <div>{todo.title}</div>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </div>
        ))
      }
    </>
  );
}

export default TodoWithUseRecoilCallbackPage;
