import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registro from "../containers/Registro";
import "../styles/global.scss";
import AppContext from "../context/AppContext";

function App() {
  return (
    <>
      <AppContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
