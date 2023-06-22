import {atom} from "recoil";
import {Todo} from "./types.ts";

export const todoListState = atom<Todo[]>({
  key: 'TodoList',
  default: []
});
