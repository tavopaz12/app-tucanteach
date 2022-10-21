import React from "react";
import "@styles/NotFound/Not_found.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="not__found">
        <div className="face">
          // // ----------------------------------------
          <div className="band">
            <div className="red" />
            <div className="white" />
            <div className="blue" />
          </div>
          // // ----------------------------------------
          <div className="eyes" />
          <div className="dimples" />
          <div className="mouth" />
          // // ----------------------------------------
        </div>
        // // ----------------------------------------
        <h1>¡Ups! ¡Algo salió mal!</h1>
        <Link to="/" className="link">
          <div className="btn">Regresar al inicio</div>
        </Link>
        // // ----------------------------------------
      </div>
    </>
  );
}

export default NotFound;
