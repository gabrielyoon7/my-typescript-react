import {StoreConfig} from "../types/types.ts";
import StateManager from "../StateManager.ts";

export const store = <T>(storeConfig: StoreConfig<T>) => {
  const stateManager = new StateManager<T>(storeConfig.default);
  return stateManager;
};
