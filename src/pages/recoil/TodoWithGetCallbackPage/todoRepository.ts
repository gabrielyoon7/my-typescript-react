import {selector} from "recoil";
import {todoListState} from "../todo.ts";

export const todoRepository = selector({
  key: 'todoRepository',
  get: ({getCallback}) => {

    const loadTodoList = getCallback(({set}) => async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      set(todoListState, data);
    });

    const updateCheckboxChange = getCallback(({set, snapshot}) => async (todoId) => {
      const todos = await snapshot.getPromise(todoListState);
      set(todoListState, todos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo));
    });

    const deleteTodo = getCallback(({set, snapshot}) => async (todoId) => {
      const todos = await snapshot.getPromise(todoListState);
      set(todoListState, todos.filter((todo) => todo.id !== todoId));
    });

    return {
      loadTodoList,
      updateCheckboxChange,
      deleteTodo
    };
  }
});
