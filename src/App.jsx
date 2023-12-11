import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Under } from "./components/Under";
import Loader from "./components/Loader";
function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      />
      <Nav />
      <Outlet className="set-margin" />
      <Under />
    </div>
  );
}

export default App;
