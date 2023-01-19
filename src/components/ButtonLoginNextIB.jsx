import React from "react";

function ButtonLoginNextIB({ page, setPage, formData }) {
  const longitudText = 2;

  let nickNameKey = formData.nickname;
  let fullNameKey = formData.fullName;
  let lastNameKey = formData.lastName;

  return (
    <>
      <button
        className="button__login"
        onKeyUp={() => {
          nickNameKey.length <= longitudText
            ? ""
            : fullNameKey.length <= longitudText
            ? ""
            : lastNameKey.length <= longitudText
            ? ""
            : setPage(page + 1);
        }}
        onClick={() => {
          fullNameKey.trim() === ""
            ? ""
            : lastNameKey.trim() === ""
            ? ""
            : nickNameKey.trim() === ""
            ? ""
            : nickNameKey.length <= longitudText
            ? ""
            : fullNameKey.length <= longitudText
            ? ""
            : lastNameKey.length <= longitudText
            ? ""
            : setPage(page + 1);
        }}
        style={{
          pointerEvents:
            nickNameKey.length <= longitudText
              ? "none"
              : fullNameKey.length <= longitudText
              ? "none"
              : lastNameKey.length <= longitudText
              ? "none"
              : "visible",

          backgroundColor:
            nickNameKey.length <= longitudText
              ? "#7a9f6c"
              : fullNameKey.length <= longitudText
              ? "#7a9f6c"
              : lastNameKey.length <= longitudText
              ? "#7a9f6c"
              : "",
        }}
      >
        Next
      </button>
    </>
  );
}

export default ButtonLoginNextIB;
