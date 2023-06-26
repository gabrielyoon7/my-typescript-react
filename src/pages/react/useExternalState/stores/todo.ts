import {store} from "../xState/config/configs.ts";
import {Todo} from "../types/types.ts";

export const todoStore = store<Todo[]>([
  {id: 0, content: 'hi-0'},
  {id: 1, content: 'hi-1'},
  {id: 2, content: 'hi-2'},
]);

export const todoActions = {
  addTodo: (value: string) => {
    const prevTodo = todoStore.getState();
    const newTodo: Todo = {
      id: prevTodo.length,
      content: value
    };
    todoStore.setState([...prevTodo, newTodo]);
  },
  deleteTodo: (id: number) => {
    const prevTodo = todoStore.getState();
    const nextTodo = prevTodo.filter(todo => todo.id !== id);
    todoStore.setState(nextTodo);
  }
};
