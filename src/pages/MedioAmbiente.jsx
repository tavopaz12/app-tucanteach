import React from "react";

import ContainerSession from "../containers/ContainerSession.jsx";
import Header from "../containers/Header.jsx";
import "../styles/MedioAmbiente.scss";
import { getCursosMedioAmbiente } from "../hooks/useDataMedioAmbiente.jsx";

export default function MedioAmbiente() {
  const cursos = getCursosMedioAmbiente();
  return (
    <>
      <Header></Header>

      <div className="banner__medioAmbiente">
        <div className="banner__medioAmbiente__text">
          <h2>MEDIO AMBIENTE</h2>
        </div>
      </div>

      <div className="container__cards">
        {cursos.map((curso) => (
          <ContainerSession
            to={`sesion/${curso.number}`}
            key={curso.number}
            title={curso.name}
            image={curso.image}
            objective={curso.amount}
          />
        ))}
      </div>
    </>
  );
}
