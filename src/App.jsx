import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Under } from "./components/Under";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet className="set-margin" />
      <Under />
    </div>
  );
}

export default App;
