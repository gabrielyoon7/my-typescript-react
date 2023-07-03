import {store} from "../x-state";


export interface Todo {
  id: number;
  content: string;
}

export const todoStore = store<Todo[]>([
  {id: 0, content: 'hi-0'},
  {id: 1, content: 'hi-1'},
  {id: 2, content: 'hi-2'},
]);
