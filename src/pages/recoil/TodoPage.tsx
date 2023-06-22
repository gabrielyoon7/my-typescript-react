import {useRecoilState} from "recoil";
import {todoListState} from "./todo.ts";

function TodoPage() {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const loadTodoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setTodoList(data);
  };

  const handleCheckboxChange = (todoId: number) => {
    const newTodoList = todoList.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
    setTodoList(newTodoList);
  };

  const handleDelete = (todoId: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  };

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

export default TodoPage;
