import { useSyncExternalStore } from "react";
import StateManager, { DataObserver } from "./StateManager.ts";

export const useExternalState = <T>(store: DataObserver<T>): [T, (newState: T) => void] => {
  const { subscribe, getState, setState } = store;
  const state = useSyncExternalStore(subscribe, getState);

  return [state, setState];
};

export const useSetExternalState = <T>(store: DataObserver<T>): (newState: T) => void => {
  const { setState } = store;
  return setState;
};

export const useExternalValue = <T>(store: DataObserver<T>): T => {
  const { subscribe, getState } = store;
  const state = useSyncExternalStore(subscribe, getState);

  return state;
};

export const store = <T>(initialState: T) => {
  const stateManager = new StateManager<T>(initialState);
  return stateManager;
};
