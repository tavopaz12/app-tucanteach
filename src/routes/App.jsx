import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.scss";
import AppContext from "../context/AppContext";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

function App() {
  return (
    <>
      <AppContext.Provider value={<Home></Home>}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/registro" element={<SignUp />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
