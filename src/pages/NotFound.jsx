import React from "react";
import "../styles/NotFound/Not_found.scss";
import { Link } from "react-router-dom";

function NotFound({ title, to }) {
  return (
    <>
      <div className="flex-container">
        <div className="text-center">
          <h1>
            <span className="fade-in" id="digit1">
              4
            </span>
            <span className="fade-in" id="digit2">
              0
            </span>
            <span className="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 className="fadeIn">{title}</h3>
          <Link to={to}>
            <button type="button" name="button">
              Regresar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
