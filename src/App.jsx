import React, {lazy, Suspense} from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import Loader from "./components/Loader";
const Footer = lazy(() =>  import('./components/Footer'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div><Loader /></div>}>
        <Nav />
      <Outlet className="set-margin" />
      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
