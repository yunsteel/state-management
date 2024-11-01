import { Store } from "./type";

export const createStore = <T>(initialState: T): Store<T> => {
  let state: T = initialState;

  const callbacks = new Set<() => void>();

  return {
    getState: () => state,
    setState: (nextState) => {
      if (typeof nextState === "function") {
        state = (nextState as (prev: T) => T)(state);
      } else {
        state = nextState;
      }

      callbacks.forEach((callback) => callback());
    },
    subscribe: (listener) => {
      callbacks.add(listener);
      return () => callbacks.delete(listener);
    },
  };
};
