import React from "react";

function ButtonLoginNextIE({ page, setPage, formData }) {
  const longitudText = 5;

  let nivelSchoolKey = formData.nivelSchool;
  let nameSchoolKey = formData.nameSchool;
  let gradeSchoolKey = formData.gradeSchool;
  let ubicacionSchoolKey = formData.ubicacionSchool;

  return (
    <>
      <button
        className="button__login"
        onClick={() => {
          nivelSchoolKey.trim() === ""
            ? ""
            : nameSchoolKey.trim() === ""
            ? ""
            : gradeSchoolKey.trim() === ""
            ? ""
            : ubicacionSchoolKey.trim() === ""
            ? ""
            : setPage(page + 1);
        }}
        style={{
          pointerEvents:
            nivelSchoolKey === ""
              ? "none"
              : nameSchoolKey.length <= longitudText
              ? "none"
              : ubicacionSchoolKey.length <= longitudText
              ? "none"
              : gradeSchoolKey === ""
              ? "none"
              : "visible",

          backgroundColor:
            nivelSchoolKey === ""
              ? "#7a9f6c"
              : gradeSchoolKey === ""
              ? "#7a9f6c"
              : nameSchoolKey.length <= longitudText
              ? "#7a9f6c"
              : ubicacionSchoolKey.length <= longitudText
              ? "#7a9f6c"
              : "",
        }}
      >
        next
      </button>
    </>
  );
}

export default ButtonLoginNextIE;
