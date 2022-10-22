import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
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
      <AppContext.Provider value={<Home></Home>}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
