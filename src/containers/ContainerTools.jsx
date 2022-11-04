import {
  faGear,
  faHome,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../styles/ContainerTools.scss";

function ContainerTools() {
  
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <div className="container__tools">
      <div className="container__tools__icon">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faGear} />
        <div className="container-switch">
          <div className="icon">
            {checked ? (
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            )}
          </div>
          <input
            className="switch"
            type="checkbox"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
          />
        </div>
      </div>
    </div>
  );
}

export default ContainerTools;
