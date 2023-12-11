import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Under } from "./components/Under";
import About from "./pages/About";

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
