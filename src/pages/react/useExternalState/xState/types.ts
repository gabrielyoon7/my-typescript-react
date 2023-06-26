export interface DataObserver<T> {
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
  setState: (newState: T) => void;
  getState: () => T;
}

export type GetState<T> = (store: DataObserver<T>) => T;
export type SetState<T> = (store: DataObserver<T>, newValue: T) => void;

export interface StoreHandler<T> {
  get: GetState<T>;
  set: SetState<T>;
}
