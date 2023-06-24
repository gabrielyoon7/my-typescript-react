import {create} from 'zustand';
import {Todo} from "./type.ts";

type Store = {
  todos: Todo[];
  addTodo: (newId: number) => void;
}

export const useTodo = create<Store>()((set) => ({
  todos: [],
  addTodo: (newId) => set((state) => ({
    todos: [
      ...state.todos, {
        id: newId,
        content: `#todo : ${newId}`,
        checked: false
      }
    ]
  })),
}));
