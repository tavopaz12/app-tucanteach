import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/global.scss";

function App() {
  return (
    <div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
