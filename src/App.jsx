import React from "react";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/scrollTop/ScrollTop";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <MyState>
        <ScrollTop />
        <Outlet />
        <Toaster/>
      </MyState>
    </div>
  );
};

export default App;
