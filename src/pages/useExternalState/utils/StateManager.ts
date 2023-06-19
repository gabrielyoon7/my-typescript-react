import {DataObserver} from "./types/types.ts";

class StateManager<T> implements DataObserver<T> {
  public state: T;
  private listeners: Array<() => void> = [];

  constructor(initValue: T) {
    this.state = initValue;
  }

  subscribe = (listener: () => void) => {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  emitChange = () => {
    for (const listener of this.listeners) {
      listener();
    }
  };

  setState = (newState: T) => {
    this.state = newState;
    this.emitChange();
  };

  getSnapshot = () => {
    return this.state;
  };
}

export default StateManager;
