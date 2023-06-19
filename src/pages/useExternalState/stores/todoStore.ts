import {store} from "../utils/config/store.ts";
import {Todo} from "../types/types.ts";
import {action} from "../utils/config/action.ts";
// import {Action} from "../utils/types/types.ts";

export const todoStore = store<Todo[]>({
  default: [
    {id: 0, content: 'hi-0'},
    {id: 1, content: 'hi-1'},
    {id: 2, content: 'hi-2'},
  ],
});


/**
 * TODO: 비즈니스로직 관리 기능(actions) 구현 필요
 */
