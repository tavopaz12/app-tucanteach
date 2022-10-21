import React from "react";

function BtnSendForm({ formData, errors }) {
  // // ----------------------------------------

  const longitudText = 10;

  return (
    <>
      <button
        type="submit"
        className="button__login"
        style={{
          pointerEvents:
            formData.cellPhone.length < longitudText
              ? "none"
              : errors.password.err
              ? "none"
              : errors.email.err
              ? "none"
              : "visible",

          backgroundColor:
            formData.cellPhone.length < longitudText
              ? "#7a9f6c"
              : errors.password.err
              ? "#7a9f6c"
              : errors.email.err
              ? "#7a9f6c"
              : "",
        }}
      >
        enviar
      </button>
    </>
  );
}

export default BtnSendForm;
