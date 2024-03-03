import React from "react";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/scrollTop/ScrollTop";

const App = () => {
  return (
    <div>
      <ScrollTop/>
      <Outlet />
    </div>
  );
};

export default App;
