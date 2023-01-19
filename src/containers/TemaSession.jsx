import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getActividadMedioAmbiente } from "../hooks/useDataActividadesMedioAmbiente";
import NotFound from "../pages/NotFound";
import "../styles/TemaSesion.scss";
import ActividadDefault from "./ActividadDefault";

export default function TemaSession({ isToogle }) {
  let navigate = useNavigate();
  let params = useParams();
  let actividad = getActividadMedioAmbiente(params.actvividadId);
  if (!actividad) return <ActividadDefault></ActividadDefault>;

  return (
    <section
      className={
        isToogle
          ? "tema__section__container-active"
          : "tema__section__container"
      }
    >
      <h2>Total Due: {actividad.amount}</h2>
      <p>
        {actividad.name}: {actividad.number}
      </p>
      <p>Due Date: {actividad.due}</p>
      <div>
        {actividad.content ? (
          <iframe width="100%" height="500rem" src={actividad.content}></iframe>
        ) : (
          ""
        )}
      </div>
      <p>
        <button
          onClick={() => {
            navigate("/medio-ambiente");
          }}
        >
          Delete
        </button>
      </p>
      <div className="tema__section__container__lorem"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias delectus
        suscipit eos, doloremque eius reprehenderit, error harum ex aliquid
        aperiam, magni distinctio non doloribus provident debitis ipsa iste
        minus ea?
      </p>
    </section>
  );
}
