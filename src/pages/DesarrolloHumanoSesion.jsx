import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getCursoDesarrolloHumano } from "../hooks/useDataDesarrolloHumano";
import NotFound from "./NotFound.jsx";

export default function DesarrolloHumanoSesion() {
  let params = useParams();
  let navigate = useNavigate();
  let curso = getCursoDesarrolloHumano(params.cursoId);
  if (!curso)
    return (
      <NotFound
        title={"Esta sesión no existe en nuestra aplicación, intenta con otra"}
        to={"/desarrollo-humano"}
      />
    );
  return (
    <div>
      <main style={{ padding: "1rem" }}>
        <h2>Total Due: {curso.amount}</h2>
        <p>
          {curso.name}: {curso.number}
        </p>
        <p>Due Date: {curso.due}</p>
        <p>
          <button
            onClick={() => {
              navigate("/desarrollo-humano");
            }}
          >
            Delete
          </button>
        </p>
      </main>
    </div>
  );
}
