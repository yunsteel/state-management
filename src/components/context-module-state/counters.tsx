import { useCallback, useEffect } from "react";
import { useCounterSelector, useSetCounterState } from "../../stores/context";

export function Rapi() {
  const count = useCounterSelector((state) => state.count);

  const setCount = useSetCounterState();

  const handleClick = useCallback(() => {
    setCount((prev) => ({ ...prev, count: prev.count + 1, text: "rapi" }));
  }, [setCount]);

  useEffect(() => {
    console.log("Rapi render");
  });

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>rapi +1</button>
      <LastClicked memberText="rapi" />
    </div>
  );
}

export function Anis() {
  const count = useCounterSelector((state) => state.count);

  const setCount = useSetCounterState();

  const handleClick = useCallback(() => {
    setCount((prev) => ({ ...prev, count: prev.count + 2, text: "anis" }));
  }, [setCount]);

  useEffect(() => {
    console.log("Anis render");
  });

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>anis +2</button>
      <LastClicked memberText="anis" />
    </div>
  );
}

export function Neon() {
  const count = useCounterSelector((state) => state.count);

  const setCount = useSetCounterState();

  const handleClick = useCallback(() => {
    setCount((prev) => ({ ...prev, count: prev.count + 3, text: "neon" }));
  }, [setCount]);

  useEffect(() => {
    console.log("Neon render");
  });

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>neon +3</button>
      <LastClicked memberText="neon" />
    </div>
  );
}

function LastClicked({ memberText }: { memberText: "rapi" | "anis" | "neon" }) {
  const text = useCounterSelector((state) => state.text);

  if (text === memberText) {
    return (
      <span style={{ fontSize: 12, color: "darkred", marginLeft: "10px" }}>
        Last clicked
      </span>
    );
  }

  return null;
}
