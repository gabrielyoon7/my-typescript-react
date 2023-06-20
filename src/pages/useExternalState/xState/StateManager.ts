import {DataObserver} from "./types/types.ts";

class StateManager<T> implements DataObserver<T> {
  public state: T;
  private listeners: Array<() => void> = [];

  constructor(initialState: T) {
    this.state = initialState;
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
    this.state = newState; // 실험결과 반드시 재할당 해야 리액트에서 변화를 감지함 ==> Object.is() 연산 동작
    this.emitChange();
  };

  getSnapshot = () => {
    return this.state;
  };
}

export default StateManager;
