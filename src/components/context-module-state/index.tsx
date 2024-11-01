import { StoreProvider } from "../../stores/context";
import { Anis, Neon, Rapi } from "./counters";

export function CountersWithContextModuleState() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Context Api + Module state</h2>
      <StoreProvider initialState={{ count: 0, text: "rapi" }}>
        <Rapi />
        <Anis />
        <Neon />
        <StoreProvider initialState={{ count: 100, text: "neon" }}>
          <h3>Using inner store provider</h3>
          <Rapi />
          <Anis />
          <Neon />
        </StoreProvider>
      </StoreProvider>
    </div>
  );
}
