import {useSyncExternalStore} from "react";
import {DataObserver} from "../types/types.ts";

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

