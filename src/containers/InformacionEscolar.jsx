import React from "react";

// // ----------------------------------------
import InputLogin from "../components/inputLogin.jsx";
import ButtonLoginPrev from "../components/ButtonLoginPrev";
import InputSelect from "../components/InputSelect";
import ButtonLoginNextIE from "../components/ButtonLoginNextIE";

// // ----------------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocation,
  faSchool,
  faSchoolCircleCheck,
  faSchoolCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

function InformacionEscolar({ page, setPage, formData, setFormData }) {
  return (
    <>
      <InputSelect
        titleLabel={
          formData.nivelSchool === ""
            ? "Seleccione una opcion*"
            : "Nivel de estudio"
        }
        icon={
          <FontAwesomeIcon icon={faSchoolCircleCheck} className="icon-select" />
        }
        options={["Primaria", "Secundaria"]}
        nameValue={formData.nivelSchool}
        onChange={(e) =>
          setFormData({ ...formData, nivelSchool: e.target.value })
        }
      />

      <InputLogin
        inputType={"text"}
        titleLabel={"Nombre de la escuela*"}
        placeholder={"Nombre de la escuela"}
        maxlength={"50"}
        value={formData.nameSchool}
        onChange={(e) =>
          setFormData({ ...formData, nameSchool: e.target.value })
        }
        icon={<FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>}
      />

      <InputSelect
        titleLabel={
          formData.gradeSchool === ""
            ? "Seleccione una opcion*"
            : "Grado de estudios"
        }
        icon={
          <FontAwesomeIcon
            icon={faSchoolCircleExclamation}
            className="icon-select"
          />
        }
        options={["Primero", "Segundo", "Tercero", "Cuarto", "Quinto", "Sexto"]}
        nameValue={formData.gradeSchool}
        onChange={(e) =>
          setFormData({ ...formData, gradeSchool: e.target.value })
        }
      />

      <InputLogin
        inputType={"text"}
        titleLabel={"Ubicacion*"}
        placeholder={"Direccion de la escuela"}
        maxlength={"50"}
        value={formData.ubicacionSchool}
        onChange={(e) =>
          setFormData({ ...formData, ubicacionSchool: e.target.value })
        }
        icon={<FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon>}
      />

      <ButtonLoginPrev setPage={setPage} page={page} />

      <ButtonLoginNextIE setPage={setPage} page={page} formData={formData} />
    </>
  );
}

export default InformacionEscolar;
