import React from "react";

function ButtonLoginPrev({ setPage, page }) {

  return (
    <>
      <button
        className="button__login"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previo
      </button>
    </>
  );
}

export default ButtonLoginPrev;
