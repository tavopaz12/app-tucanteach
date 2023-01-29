import React from "react";
import "../styles/InputPerfil.scss";

export default function InputText({ title, type }) {
  return (
    <>
      <div className="inputBox">
        <input type={type} required="required" />
        <span>{title}:</span>
      </div>
    </>
  );
}
