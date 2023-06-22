import {useRecoilState} from "recoil";
import {todoListState} from "../todo.ts";

export const useTodo = () => {

  const [todoList, setTodoList] = useRecoilState(todoListState);

  const loadTodoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setTodoList(data);
  };

  const changeCheckbox = (todoId: number) => {
    const newTodoList = todoList.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
    setTodoList(newTodoList);
  };

  const deleteTodo = (todoId: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  };

  return {
    todoList,
    loadTodoList,
    changeCheckbox,
    deleteTodo
  };
};
