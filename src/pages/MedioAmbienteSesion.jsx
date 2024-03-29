import React, { useState } from "react";
import { useParams, useNavigate, Navigate, Outlet } from "react-router-dom";
import Header from "../containers/Header.jsx";
import HeaderSesion from "../containers/HeaderSesion.jsx";
import TemasContainer from "../containers/TemasContainer.jsx";
import TemaSession from "../containers/TemaSession.jsx";
import { getCursoMedioAmbiente } from "../hooks/useDataMedioAmbiente.jsx";
import NotFound from "./NotFound.jsx";
import "../styles/MedioAmbienteSesion.scss";

export default function SessionsMedioAmbiente() {
  const [toggleMenu, setToggleMenu] = useState(
    localStorage.getItem("toogle") === "false" ? false : true
  );
  const [pos, setPos] = useState(0);

  window.onscroll = function () {
    setPos(window.scrollY);
  };

  let params = useParams();
  let curso = getCursoMedioAmbiente(params.cursoId);
  if (!curso)
    return (
      <NotFound
        title={"Esta sesión no existe en nuestra aplicación, intenta con otra"}
        to={"/medio-ambiente"}
      />
    );

  return (
    <>
      <HeaderSesion toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      <div className="conten__sesion__container">
        {toggleMenu === true ? <TemasContainer pos={pos} /> : ""}
        <TemaSession isToogle={toggleMenu}></TemaSession>
      </div>
    </>
  );
}
