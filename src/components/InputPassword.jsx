import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function InputPassword({
  formData,
  setFormData,
  errors,
  setErrors,
  pattern,
  title,
  maxlength,
}) {
  // // ----------------------------------------
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);
  // // ----------------------------------------

  // // ----------------------------------------
  const passRegexp = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/
  );
  // // ----------------------------------------

  function passValidBlur() {
    // // ----------------------------------------
    const hasError = !passRegexp.test(formData.password);

    setErrors({
      ...errors,
      password: {
        err: hasError,
        msgErr:
          "Minimo 6 caracteres, máximo 12, incluir una letra mayúscula, un número y no debe contener caracteres especiales.",
      },
    });
  }

  // // ----------------------------------------

  return (
    <div className="field">
      <p
        className="field__title"
        style={{
          color: errors.password.err ? "#fefe00" : "",
        }}
      >
        {errors.password.err ? errors.password.msgErr : "Contraseña*"}
      </p>
      <FontAwesomeIcon
        icon={shown ? faEyeLowVision : faEye}
        onClick={switchShown}
      />
      <input
        className="field__input"
        type={shown ? "text" : "password"}
        placeholder={"De 6 a 12 caracteres, una mayuscula y un numero"}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        onKeyUp={passValidBlur}
        onBlur={passValidBlur}
        pattern={pattern}
        title={title}
        maxLength={maxlength}
        required
        style={{
          borderBottom: errors.password.err ? "2px solid #fefe00" : "",
        }}
      />
    </div>
  );
}

export default InputPassword;
