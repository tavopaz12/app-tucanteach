import React from "react";
import InputLogin from "../components/inputLogin";
import ButtonLoginNextIB from "../components/ButtonLoginNextIB";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function InformacionBasica({ page, setPage, formData, setFormData }) {
  return (
    <>
      {/* <h2 className="title__category">Informacion Basica</h2> */}

      <br />

      <InputLogin
        inputType={"text"}
        titleLabel={"Nombre (s)*"}
        placeholder={"Nombre completo"}
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        icon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
        title={"El campo no puede estar vacio"}
        maxlength={"20"}
      />

      <br />

      <InputLogin
        inputType={"text"}
        titleLabel={"Apellidos*"}
        placeholder={"Apellidos"}
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        icon={<FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>}
        title={"El campo no puede estar vacio"}
        maxlength={"20"}
      />

      <br />

      <InputLogin
        inputType={"text"}
        titleLabel={"Nombre de usuario*"}
        placeholder={"Escribe tu nombre de usuario"}
        value={formData.nickname}
        onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
        icon={<FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>}
        title={"El campo no puede estar vacio"}
        maxlength={"10"}
      />

      <br />

      <center>
        <ButtonLoginNextIB formData={formData} setPage={setPage} page={page} />
      </center>
    </>
  );
}

export default InformacionBasica;
