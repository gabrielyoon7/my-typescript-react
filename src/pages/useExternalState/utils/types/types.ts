export interface DataObserver<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
  setState: (newState: T) => void;
  getSnapshot: () => T;
}

export interface StoreConfig<T> {
  default: T;
}

export interface ActionConfig<T> {
  store: any,
  actions: {
    [key: string]: ({get, set}: { get?: any, set?: any }) => (...params: unknown[]) => void;
  }
}
