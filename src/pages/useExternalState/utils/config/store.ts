import {Config} from "../types/types.ts";
import StateManager from "../StateManager.ts";

export const store = <T>(storeConfig: Config<T>) => {
  const stateManager = new StateManager<T>(storeConfig.default);
  return stateManager;
};
