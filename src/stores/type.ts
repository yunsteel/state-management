export interface Store<T> {
  getState: () => T;
  setState: (nextState: T | ((prev: T) => T)) => void;
  subscribe: (listener: () => void) => VoidFunction;
}
