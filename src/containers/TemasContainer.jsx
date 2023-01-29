import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getActividadesMedioAmbiente } from "../hooks/useDataActividadesMedioAmbiente.jsx";
import "../styles/TemaContainer.scss";

export default function TemasContainer({ pos }) {
  let navigate = useNavigate();
  let location = useLocation();

  const actividades = getActividadesMedioAmbiente();

  return (
    <section className="container__medioAmbiente__temas">
      <div className="container__medioAmbiente__temas__info-active">
        <button
          onClick={() => {
            navigate("/medio-ambiente");
          }}
          className="container__medioAmbiente__temas__exit"
        >
          Regresar
        </button>
        <div className="container__medioAmbiente__temas__infoTitle">
          <FontAwesomeIcon
            className="container__medioAmbiente__temas__infoTitle__icon"
            icon={faBookOpen}
          />
          <p>Sesion</p>
        </div>

        <div className="container__medioAmbiente__info">
          <p className="container__medioAmbiente__info__title">
            Cuidado del medio ambiente
          </p>
        </div>
        <br />
        <br />
        <div className="container__medioAmbiente__temas__infoTitle">
          <FontAwesomeIcon
            className="container__medioAmbiente__temas__infoTitle__icon"
            icon={faBook}
          />
          <p>Temas</p>
        </div>

        <div className="list__temas__medioAmbiente">
          <ol>
            {actividades.map((actividad) => (
              <Link
                className="tema__active"
                to={`tema/${actividad.number}` + location.search}
                key={actividad.number}
              >
                <li>
                  <span>{actividad.name}</span>
                </li>
              </Link>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
