export interface DataObserver<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
  setState: (newState: T) => void;
  getSnapshot: () => T;
}
