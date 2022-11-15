import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CardSection.scss";

function CardSection({ title, description, image, to }) {
  const [expandsImg, setExpandsImg] = useState(false);

  const toggleExpandsImg = () => {
    if (expandsImg === false) {
      setExpandsImg(true);
    } else {
      setExpandsImg(false);
    }
  };
 
  return (
    <div className="container__card">
      <div className="wrapper__card">
        <img
          src={image}
          alt="Imagen de curso"
          loading="lazy"
          onClick={() => {
            toggleExpandsImg();
          }}
          className={expandsImg === true ? "active" : ""}
        />
        <div className="title__cardSection">
          <p>{title}</p>
        </div>
      </div>

      <div className="content__cardSection">
        <p>{description}</p>
        <div className="buttons__cardSection">
          <div className="btn__cardSection">
            <Link to={to} className="link">
              <button>Ir al curso</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
