import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BtnSendForm from "../components/BtnSendForm";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import "../styles/Login/BtnTucan.scss";
import "../styles/TucanAnimate.scss";

function Login() {
  const [errors, setErrors] = useState({
    email: {
      err: false,
      msgErr: "",
    },
    password: {
      err: false,
      msgErr: "",
    },
    input: {
      err: false,
      msgErr: "",
    },
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="login">
      <div className="image__login">
        <img
          src="https://data.whicdn.com/images/149799261/original.jpg"
          alt=""
          width="150%"
        />
      </div>
      <div className="form__login">
        <h2 className="form__login__title">Bienvenido</h2>

        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>

        <br></br>
        <form action="" onSubmit={onSubmit}>
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
          <center>
            <BtnSendForm
              formData={formData}
              errors={errors}
              titleBtn={"Login"}
            />
          </center>
        </form>
        <br />
        <hr />
        <br />
        <div>
          <p href="" className="create__account">
            Aun no tengo una cuenta!{" "}
            <NavLink to="/registro" className="create__account--link">
              Registrarme!
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
