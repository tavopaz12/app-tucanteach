import React, { useState } from "react";
// ESTILOS
import "../styles/Login/Login.scss";
import "../styles/Login/InputLogin.scss";
import "../styles/Login/ButtonLogin.scss";
import "../styles/Login/Login.scss";

// CONTENDEDORES
import InformacionBasica from "../containers/Login/InformacionBasica";
import InformacionEscolar from "../containers/Login/InformacionEscolar";
import InformacionContacto from "../containers/Login/InformacionContacto";

// IMAGENES
import bgLogin from "../assets/images/—Pngtree—hand drawn flying dreams kids_1035342.jpg";

function Login() {
  const [page, setPage] = useState(0);

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

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    nickname: "",

    nivelSchool: "",
    nameSchool: "",
    gradeSchool: "",
    ubicacionSchool: "",

    email: "",
    password: "",
    cellPhone: "",
  });

  const componentList = [
    <InformacionBasica
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,

    <InformacionEscolar
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,

    <InformacionContacto
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      setErrors={setErrors}
      errors={errors}
    />,
  ];

  return (
    <div className="login">
      <div className="image__login">
        <img src={bgLogin} alt="" width="150%" />
      </div>
      <div className="form__login">
        <h2 className="form__login__title">Formulario de registro</h2>
        <div className="steps">
          <p
            style={{
              textDecoration:
                page === 0
                  ? "none"
                  : page === 1
                  ? "line-through #1c3d36 3px"
                  : page === 2
                  ? "line-through #1c3d36 3px"
                  : "none",
            }}
          >
            Personal
          </p>

          <p
            style={{
              textDecoration:
                page === 0
                  ? "none"
                  : page === 1
                  ? "none"
                  : page === 2
                  ? "line-through #1c3d36 3px"
                  : "none",
            }}
          >
            Escolar
          </p>

          <p>Contacto</p>
        </div>
        <div className="progress-bar">
          <div
            style={{
              width:
                page === 0
                  ? "33%"
                  : page === 1
                  ? "66%"
                  : page === 2
                  ? "100%"
                  : "100%",
            }}
          ></div>
        </div>
        <form action="" onSubmit={onSubmit}>
          <div>{componentList[page]}</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
