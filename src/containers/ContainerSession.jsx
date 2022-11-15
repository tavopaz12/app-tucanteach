import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/ContainerSessionCard.scss";

export default function ContainerSession({ image, objective, title, to, ...props }) {
  let location = useLocation();
  return (
    <>
      <div className="card swiper-slide">
        <div className="card__image-content">
          <span className="card__overlay" />
          <div className="card-image">
            <img src={image} alt="SIN IMAGEN" className="card-img" />
          </div>
        </div>
        <div className="card__content">
          <h2 className="card__content__name">{title}</h2>
          <p className="card__content__description">
            {objective}
          </p>

          <Link to={to + location.search} {...props}>
            <button className="card__button">Ir a la sesion</button>
          </Link>
        </div>
      </div>
    </>
  );
}
