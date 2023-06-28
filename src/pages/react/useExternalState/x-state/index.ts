import {DataObserver, GetState, SetState, StoreHandler} from "./types.ts";
import {useSyncExternalStore} from "react";
import StateManager from "./StateManager.ts";

export const useExternalState = <T>(store: DataObserver<T>): [T, (newState: T) => void] => {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  return [state, store.setState];
};
export const useSetExternalState = <T>(store: DataObserver<T>): (newState: T) => void => {
  return store.setState;
};
export const useExternalValue = <T>(store: DataObserver<T>): T => {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  return state;
};

export const store = <T>(initialState: T) => {
  const stateManager = new StateManager<T>(initialState);
  return stateManager;
};

export const action = <T, R>(callback: ({get, set}: StoreHandler<T>) => R): R /*ReturnType<typeof callback> */ => {
  const get: GetState<T> = (store) => store.getState();
  const set: SetState<T> = (store, newValue) => store.setState(newValue);
  return callback({get, set});
};
