import React, { useState } from "react";
import ContainerTools from "./ContainerTools";
import MenuToogle from "./MenuToogle";
import "../styles/HeaderSesion.scss";

export default function HeaderSesion({setToggleMenu, toggleMenu}) {
  
  return (
    <header className="header__session">
      <MenuToogle setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <ContainerTools />
    </header>
  );
}
