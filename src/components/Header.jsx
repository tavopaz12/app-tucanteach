import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
              <a href="">Registro</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
