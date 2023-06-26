export interface DataObserver<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
  setState: (newState: T) => void;
  getState: () => T;
}

// export interface StoreConfig<T> {
//   default: T;
// }
//
// export interface ActionConfig<T> {
//   store: DataObserver<T>,
//   actions: {
//     [key: string]: ({get, set}: { get?: any, set?: any }) => (...params: unknown[]) => void;
//   }
// }
