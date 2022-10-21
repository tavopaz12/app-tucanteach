import React from "react";

function ButtonLoginPrev({ setPage, page }) {
  // // ----------------------------------------

  return (
    <>
      <button
        className="button__login"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        previo
      </button>
    </>
  );
}

export default ButtonLoginPrev;
