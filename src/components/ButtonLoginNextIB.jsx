import React from "react";

function ButtonLoginNextIB({ page, setPage, formData }) {
  // // ----------------------------------------

  const longitudText = 2;

  return (
    <>
      <button
        className="button__login"
        onKeyUp={() => {
          formData.nickname.length <= longitudText
            ? ""
            : formData.fullName.length <= longitudText
            ? ""
            : formData.lastName.length <= longitudText
            ? ""
            : setPage(page + 1);
        }}
        onClick={() => {
          formData.fullName.trim() === ""
            ? ""
            : formData.lastName.trim() === ""
            ? ""
            : formData.nickname.trim() === ""
            ? ""
            : formData.nickname.length <= longitudText
            ? ""
            : formData.fullName.length <= longitudText
            ? ""
            : formData.lastName.length <= longitudText
            ? ""
            : setPage(page + 1);
        }}

        style={{
          pointerEvents:
            formData.nickname.length <= longitudText
              ? "none"
              : formData.fullName.length <= longitudText
              ? "none"
              : formData.lastName.length <= longitudText
              ? "none"
              : "visible",

          backgroundColor:
            formData.nickname.length <= longitudText
              ? "#7a9f6c"
              : formData.fullName.length <= longitudText
              ? "#7a9f6c"
              : formData.lastName.length <= longitudText
              ? "#7a9f6c"
              : "",
        }}
      >
        next
      </button>
    </>
  );
}

export default ButtonLoginNextIB;
