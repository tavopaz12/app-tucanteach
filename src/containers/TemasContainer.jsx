import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TemaContainer.scss";

export default function TemasContainer({ isActive }) {
  let navigate = useNavigate();

  return (
    <section className="container__medioAmbiente__temas">
      <div className="container__medioAmbiente__temas__info">
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
            <li>
              <span>Tema 1</span>
            </li>
            <li>
              <span>Tema 2</span>
            </li>
            <li>
              <span>Tema 3</span>
            </li>
            <li>
              <span>Tema 4</span>
            </li>
            <li>
              <span>Tema 5</span>
            </li>
            <li>
              <span>Tema 6</span>
            </li>
            <li>
              <span>Tema 7</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
