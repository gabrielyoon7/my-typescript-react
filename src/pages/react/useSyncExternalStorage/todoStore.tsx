// This is an example of a third-party store
// that you might need to integrate with React.
// If your app is fully built with React,
// we recommend using React state instead.

let nextId = 0;
let todos = [{id: nextId++, text: 'TodoExample #1'}];
let listeners: Array<() => void> = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, {id: nextId++, text: 'TodoExample #' + nextId}];
    emitChange();
  },
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
