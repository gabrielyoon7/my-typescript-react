import {action, store} from "../xState/config/configs.ts";
import {Todo} from "../types/types.ts";

export const todoStore = store<Todo[]>([
  {id: 0, content: 'hi-0'},
  {id: 1, content: 'hi-1'},
  {id: 2, content: 'hi-2'},
]);

export const todoActions = action<Todo[], { addTodo: (value: string) => void, deleteTodo: (id: number) => void }>(
  ({get, set}) => ({
    addTodo: (value: string) => {
      const prevTodo = get(todoStore);
      const newTodo: Todo = {
        id: prevTodo.length,
        content: value
      };
      set(todoStore, [...prevTodo, newTodo]);
    },
    deleteTodo: (id: number) => {
      const prevTodo = get(todoStore);
      const nextTodo = prevTodo.filter(todo => todo.id !== id);
      set(todoStore, nextTodo);
    }
  })
);

