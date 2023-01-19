import React from "react";
import { Navigate } from "react-router-dom";
import { getActividadesMedioAmbiente } from "../hooks/useDataActividadesMedioAmbiente";

export default function ActividadDefault() {
  const actividades = getActividadesMedioAmbiente();
  const actividad = actividades[0];

  return (
    <>
      <Navigate to={`tema/${actividad.number}`}></Navigate>
    </>
  );
}
