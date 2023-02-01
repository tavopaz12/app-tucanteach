import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./routes/App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MedioAmbiente from "./pages/MedioAmbiente";
import SessionsMedioAmbiente from "./pages/MedioAmbienteSesion";
import PerfilUser from "./pages/perfilUser";
import DesarrolloHumano from "./pages/DesarrolloHumano";
import DesarrolloHumanoSesion from "./pages/DesarrolloHumanoSesion";
import TemaSession from "./containers/TemaSession";
import Mantenimiento from "./pages/Mantenimiento";
import ActividadDefault from "./containers/ActividadDefault";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="mantenimiento" element={<Mantenimiento />} />
        <Route path="registro" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="user/:userId" element={<PerfilUser />} />

        <Route path="medio-ambiente" element={<MedioAmbiente />} />

        <Route
          path="medio-ambiente/sesion/:cursoId"
          element={<SessionsMedioAmbiente />}
        >
          <Route index element={<ActividadDefault />} />
          <Route path="tema/:actvividadId" element={<TemaSession />} />
        </Route>

        <Route path="desarrollo-humano" element={<DesarrolloHumano />} />
        <Route
          path="desarrollo-humano/sesion/:cursoId"
          element={<DesarrolloHumanoSesion />}
        />

        <Route
          path="*"
          element={<NotFound title={"Pagina no encontrada"} to={"/"} />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
