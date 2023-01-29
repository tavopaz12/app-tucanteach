import React from "react";
import "../styles/Login/InputSelect.scss";

function InputSelect({ titleLabel, options, icon, onChange, nameValue }) {
  return (
    <div className="field">
      <p className="field__title">{titleLabel}:</p>
      <div className="content-select">
        {icon}
        <select
          defaultValue={
            nameValue === "" ? "-- Selecciona una opción --" : nameValue
          }
          required
          onChange={onChange}
          style={{
            borderBottom: nameValue === "" ? "2px solid #fefe00" : "",
          }}
        >
          <option disabled>-- Selecciona una opción --</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputSelect;
