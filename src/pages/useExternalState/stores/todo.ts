import {actions, store} from "../utils/config/xState.ts";
import {Todo} from "../types/types.ts";

export const todoStore = store<Todo[]>({
  default: [
    {id: 0, content: 'hi-0'},
    {id: 1, content: 'hi-1'},
    {id: 2, content: 'hi-2'},
  ],
});

export const todoActions = actions<Todo[]>({
  store: todoStore,
  actions: {
    /**
     * TODO: 비즈니스로직 관리 기능(actions) 구현 필요
     */
  }
});
