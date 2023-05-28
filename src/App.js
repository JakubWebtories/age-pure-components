import "./styles/styles.css";
import { Slider } from "./components/slider";
import { Tabs } from "./components/tabs";
import { TabsToggle } from "./components/tabsToggle";

function App() {
  return (
    <div className="App">
      <h1>React Start</h1>
      <Slider />
      <Tabs />
      <TabsToggle />
    </div>
  );
}

export default App;
