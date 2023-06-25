import {create} from 'zustand';
import {Todo} from "./type.ts";
import {useCounter} from "../counter/useCounter.tsx";

type Store = {
  todos: Todo[];
  addTodo: (newId: number) => void;
}

export const useTodo = create<Store>((set) => ({
  todos: [],
  addTodo: (newId) => {
    useCounter.getState().inc();
    set((state) => ({
      todos: [
        ...state.todos, {
          id: newId,
          content: `#todo : ${newId}`,
          checked: false
        }
      ]
    }));
  },
}));
