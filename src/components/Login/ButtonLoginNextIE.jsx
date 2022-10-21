import React from "react";

function ButtonLoginNextIE({ page, setPage, formData }) {
  // // // ----------------------------------------

  const longitudText = 5;

  return (
    <>
      <button
        className="button__login"
        onClick={() => {
          formData.nivelSchool.trim() === ""
            ? ""
            : formData.nameSchool.trim() === ""
            ? ""
            : formData.gradeSchool.trim() === ""
            ? ""
            : formData.ubicacionSchool.trim() === ""
            ? ""
            : setPage(page + 1);
        }}
        style={{
          pointerEvents:
            formData.nivelSchool === ""
              ? "none"
              : formData.nameSchool.length <= longitudText
              ? "none"
              : formData.ubicacionSchool.length <= longitudText
              ? "none"
              : formData.gradeSchool === ""
              ? "none"
              : "visible",

          backgroundColor:
            formData.nivelSchool === ""
              ? "#7a9f6c"
              : formData.gradeSchool === ""
              ? "#7a9f6c"
              : formData.nameSchool.length <= longitudText
              ? "#7a9f6c"
              : formData.ubicacionSchool.length <= longitudText
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
