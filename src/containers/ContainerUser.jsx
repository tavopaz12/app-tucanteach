import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/ContainerUser.scss";

function ContainerUser({ title, to, ...props }) {
  let location = useLocation();
  return (
    <div className="container__user">
      <Link to={to + location.search} {...props}>
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
          className="container__user__img"
        />
      </Link>
      <Link to={to + location.search} {...props}>
        <p className="container__user__name">{title}</p>
      </Link>
    </div>
  );
}

export default ContainerUser;
