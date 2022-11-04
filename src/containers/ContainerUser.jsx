import React from "react";
import "../styles/ContainerUser.scss";

function ContainerUser() {
  return (
    <div className="container__user">
      <img
        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        alt=""
        className="container__user__img"
      />
      <p className="container__user__name">Nombre de usuario</p>
    </div>
  );
}

export default ContainerUser;
