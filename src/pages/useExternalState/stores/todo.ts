import {store} from "../xState/config/xState.ts";
import {Todo} from "../types/types.ts";

export const todoStore = store<Todo[]>([
  {id: 0, content: 'hi-0'},
  {id: 1, content: 'hi-1'},
  {id: 2, content: 'hi-2'},
]);

export const todoActions = {
  addTodo: (value: string) => {
    const prevTodo = todoStore.get();
    const newTodo: Todo = {
      id: prevTodo.length,
      content: value
    };
    todoStore.set([...prevTodo, newTodo]);
  },
};
