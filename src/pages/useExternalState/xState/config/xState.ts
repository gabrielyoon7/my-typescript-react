import StateManager from "../StateManager.ts";

export const store = <T>(initialState: T) => {
  const stateManager = new StateManager<T>(initialState);
  return stateManager;
};

// export const actions = <T>(actionConfig: ActionConfig<T>) => {
//   return actionConfig.actions;
// };
