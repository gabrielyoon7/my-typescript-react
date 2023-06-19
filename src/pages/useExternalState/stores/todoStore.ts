import {store} from "../utils/config/store.ts";
import {Todo} from "../types/types.ts";
// import {Action} from "../utils/types/types.ts";

export const todoStore = store<Todo[]>({
  default: [
    {id: 0, content: 'hi-0'},
    {id: 1, content: 'hi-1'},
    {id: 2, content: 'hi-2'},
  ],
});
//
// export const todoAction = action{
//   addTodo: (todo: Todo) => {
//
//   }
// };
