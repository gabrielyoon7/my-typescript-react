import StateManager from "../StateManager.ts";
import {DataObserver} from "../types/types.ts";

export const store = <T>(initialState: T) => {
  const stateManager = new StateManager<T>(initialState);
  return stateManager;
};

type GetState<T> = (store: DataObserver<T>) => T;

type SetState<T> = (store: DataObserver<T>, newValue: T) => void;

interface Action<T> {
  get: GetState<T>;
  set: SetState<T>;
}

export const action = <T, R>(callback: ({get, set}: Action<T>) => R): R /*ReturnType<typeof callback> */ => {
  const get: GetState<T> = (store) => store.getState();
  const set: SetState<T> = (store, newValue) => store.setState(newValue);
  return callback({get, set});
};
