import React, { useState } from "react";
import InputDate from "../components/InputDate";
import SelectField from "../components/selectField";
import "../styles/ProfileContainer.scss";
import InputText from "./../components/InputText";
import ToastAlert from "./ToastAlert";

export default function ProfileContainer() {
  const [show, setshow] = useState(false);

  const showAlert = () => {
    setshow(true);
    getCountTimeout();
  };

  const getCountTimeout = () => {
    setTimeout(() => {
      setshow(false);
    }, 5000);
  };

  return (
    <div className="profile__container">
      <ToastAlert
        show={show}
        success
        text={"Cambios Actualizados"}
      ></ToastAlert>

      <form action="" className="perfilUpdate">
        <div className="perfilUpdate__infoGeneral">
          <h3 className="perfilUpdate__infoGeneral__title">
            Información General
          </h3>

          <div className="perfilUpdate__infoGeneral__section1">
            <InputText title={"Nombre"} type={"text"}></InputText>

            <InputText title={"Apellido"} type={"text"}></InputText>
          </div>

          <div className="perfilUpdate__infoGeneral__section2">
            <label style={{ width: "100%" }}>
              <span>Fecha de nacimiento:</span>
              <InputDate />
            </label>

            <label style={{ width: "100%" }}>
              <span>Genero:</span>
              <SelectField options={["Masculino", "Femenino"]}></SelectField>
            </label>
          </div>

          <div className="perfilUpdate__infoGeneral__section3">
            <InputText title={"Correo Electronico"} type={"text"}></InputText>

            <InputText title={"Telefono"} type={"tel"}></InputText>
          </div>
        </div>

        <div className="perfilUpdate__adress">
          <h3 className="perfilUpdate__adress__title">Datos de dirección</h3>

          <div className="perfilUpdate__adress__section1">
            <InputText title={"Dirección"} type={"text"}></InputText>

            <InputText title={"Numero"} type={"text"}></InputText>
          </div>

          <div className="perfilUpdate__adress__section2">
            <InputText title={"Ciudad"} type={"text"}></InputText>

            <InputText title={"C.P"} type={"text"}></InputText>
          </div>
        </div>

        <button className="btn__perfilUser" onClick={() => showAlert()}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}
