import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function InputEmail({ formData, setFormData, errors, setErrors }) {
  // // ----------------------------------------

  const emailRegexp = new RegExp(
    /[a-zA-Z0-9!#$%&'*_+-]([.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$/()=?¿!.,:;]|d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?/
  );

  // // ----------------------------------------

  function emailValidBlur() {
    const hasError = !emailRegexp.test(formData.email);
    setErrors({
      ...errors,
      email: { err: hasError, msgErr: "Introduza un correo valido" },
    });
  }

  // // ----------------------------------------

  return (
    <div className="field">
      <p
        className="field__title"
        style={{
          color: errors.email.err ? "#fefe00" : "",
        }}
      >
        {errors.email.err ? errors.email.msgErr : "Correo Electronico*"}
      </p>
      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      <input
        className="field__input"
        type="email"
        placeholder={"Correo Electronico"}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        onBlur={emailValidBlur}
        style={{
          borderBottom: errors.email.err ? "2px solid #fefe00" : "",
        }}
        required
      />
    </div>
  );
}

export default InputEmail;
