import {useSyncExternalStore} from "react";
import {DataObserver} from "../types/types.ts";

export const useExternalState = <T>(store: DataObserver<T>): [T, (newState: T) => void] => {
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return [state, store.set];
};

export const useSetExternalState = <T>(store: DataObserver<T>): (newState: T) => void => {
  return store.set;
};

export const useExternalValue = <T>(store: DataObserver<T>): T => {
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return state;
};

