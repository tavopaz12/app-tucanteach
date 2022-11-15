import React from "react";
import ContainerSession from "../containers/ContainerSession.jsx";
import Header from "../containers/Header.jsx";
import "../styles/MedioAmbiente.scss";
import { getCursosDesarrolloHumano } from "../hooks/useDataDesarrolloHumano.jsx";
 
export default function DesarrolloHumano() {
  const cursos = getCursosDesarrolloHumano();
  return (
    <>
      <Header></Header>
      
      <div className="banner__medioAmbiente">
        <div className="banner__medioAmbiente__text">
          <h2>Desarrollo Humano</h2>
        </div>
      </div>

      <div className="container__cards">
        {cursos.map((curso) => (
          <ContainerSession
            to={`sesion/${curso.number}`}
            key={curso.number}
            title={curso.name}
          />
        ))}
      </div>
    </>
  );
}
