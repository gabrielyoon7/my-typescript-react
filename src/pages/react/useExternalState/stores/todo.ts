import {action, store} from "../xState";


export interface Todo {
  id: number;
  content: string;
}

export const todoStore = store<Todo[]>([
  {id: 0, content: 'hi-0'},
  {id: 1, content: 'hi-1'},
  {id: 2, content: 'hi-2'},
]);

type TodoActionsType = {
  addTodo: (value: string) => void,
  deleteTodo: (id: number) => void
}

export const todoActions = action<Todo[], TodoActionsType>(
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

