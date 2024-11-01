import { useCallback, useEffect, useSyncExternalStore } from "react";
import { createStore } from "../../stores/createStore";
import { useStoreSelector } from "../../stores/useStoreSelector";
import { useStore } from "../../stores/useStore";

// share the same store
const countStore = createStore({ rapi: 0, anis: 0, neon: 0 });

export function Rapi() {
  const rapi = useSyncExternalStore(
    countStore.subscribe,
    () => countStore.getState().rapi
  );

  const handleClick = useCallback(() => {
    countStore.setState((prev) => ({ ...prev, rapi: prev.rapi + 1 }));
  }, []);

  useEffect(() => {
    console.log("Rapi render");
  });

  return (
    <div>
      <span>{rapi}</span>
      <button onClick={handleClick}>Click rapi</button>
    </div>
  );
}

export function Anis() {
  const [count, setCount] = useStoreSelector(countStore, (state) => state.anis);

  const handleClick = useCallback(() => {
    setCount((prev) => ({ ...prev, anis: prev.anis + 2 }));
  }, [setCount]);

  useEffect(() => {
    console.log("Anis render");
  });

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>Click anis</button>
    </div>
  );
}

export function Neon() {
  const [store, setStore] = useStore(countStore); // no optimization when other components update the store

  const handleClick = useCallback(() => {
    setStore((prev) => ({ ...prev, neon: prev.neon + 3 }));
  }, [setStore]);

  useEffect(() => {
    console.log("Neon render");
  });

  return (
    <div>
      <span>{store.neon}</span>
      <button onClick={handleClick}>Click neon</button>
    </div>
  );
}
