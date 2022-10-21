import React from "react";
import {NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
