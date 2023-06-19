export interface DataObserver<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
  setState: (newState: T) => void;
  getSnapshot: () => T;
}

export interface Config<T> {
  default: T;
}


export interface Action {
  [key: string]: ({get, set}: { get: any, set: any }) => void;
}

