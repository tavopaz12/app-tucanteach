import React from "react";

import '../styles/SelectField.scss'

export default function SelectField({ options }) {
  return (
    <>
      <select defaultValue={"default"} className="selectField">
        <option disabled className="selectField__option" value="default">
          --Selecciona una opción--
        </option>
        {options.map((item) => (
          <option key={item} className="selectField__option" value={item}>
            {item}
          </option> 
        ))}
      </select>
    </>
  );
}
