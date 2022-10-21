import React from "react";

// // ----------------------------------------
import ButtonLoginPrev from "../../components/Login/ButtonLoginPrev";
import InputLogin from "../../components/Login/inputLogin";
import InputEmail from "../../components/Login/InputEmail";
import InputPassword from "../../components/Login/InputPassword";
import BtnSendForm from "../../components/Login/BtnSendForm";

// // ----------------------------------------
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformacionContacto({
  page,
  setPage,
  formData,
  setFormData,
  errors,
  setErrors,
}) {
  return (
    <>
      <h2 className="title__category">Informacion Contacto</h2>
      <br />

      <InputEmail
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        pattern={
          "[a-zA-Z0-9!#$%&'*_+-]([.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$/()=?¿!.,:;]|d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?"
        }
        title={"Introduce un correo valido"}
      />
      <br />

      <InputPassword
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        maxlength={"12"}
      />
      <br />

      <InputLogin
        inputType={"tel"}
        titleLabel={"Numero de telefono"}
        placeholder={"xxx xxx xxxx"}
        value={formData.cellPhone}
        onChange={(e) =>
          setFormData({ ...formData, cellPhone: e.target.value })
        }
        icon={<FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>}
        maxlength={"10"}
      />

      <ButtonLoginPrev page={page} setPage={setPage} />
      <BtnSendForm formData={formData} errors={errors} />
    </>
  );
}

export default InformacionContacto;
