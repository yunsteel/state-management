import { CountersWithContextModuleState } from "./components/context-module-state";
import { CountersWithModuleState } from "./components/module-state";

function App() {
  return (
    <div>
      <CountersWithContextModuleState />
      <CountersWithModuleState />
    </div>
  );
}

export default App;
