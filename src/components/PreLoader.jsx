import React from "react";

import "../styles/PreLoader.scss";

export default function PreLoader() {
  const title = "loading...";
  const arrText = title.toLocaleUpperCase().split("");
  const listItems = arrText.map((letter) => (
    <span data-text-preloader={letter} class="letters-loading">
      {letter}
    </span>
  ));

  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>

          <div className="txt-loading">{listItems}</div>
        </div>

        <div className="load">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>

            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>

            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>

            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
