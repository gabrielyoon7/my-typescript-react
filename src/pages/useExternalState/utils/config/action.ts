import {ActionConfig} from "../types/types.ts";

export const action = <T>(actionConfig: ActionConfig<T>) => {
  return actionConfig.actions;
};
