import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useRef,
  useSyncExternalStore,
} from "react";
import { Store } from "./type";
import { createStore } from "./createStore";

interface CounterState {
  count: number;
  text: "rapi" | "anis" | "neon";
}

const StoreContext = createContext<Store<CounterState> | null>(null);

export const useCounterSelector = (
  selector: (state: CounterState) => CounterState[keyof CounterState]
) => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("useCounterSelector must be used within a StoreProvider");
  }

  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getState())
  );
};

export const useSetCounterState = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("useSetCounterState must be used within a StoreProvider");
  }

  return store.setState;
};

interface Props {
  initialState: CounterState;
}

export const StoreProvider: FC<PropsWithChildren<Props>> = ({
  children,
  initialState,
}) => {
  const storeRef = useRef<Store<CounterState> | null>(null);

  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
