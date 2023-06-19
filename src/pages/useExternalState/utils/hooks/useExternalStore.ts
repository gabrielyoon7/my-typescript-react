import {useSyncExternalStore} from "react";
import {DataObserver} from "../types/types.ts";

type ReturnTypeUseExternalState<T> = [T, (newState: T) => void];

const useExternalState = <T>(store: DataObserver<T>): ReturnTypeUseExternalState<T> => {
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return [state, store.setState];
};

export default useExternalState;
