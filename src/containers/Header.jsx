import React from "react";
import ContainerTools from "./ContainerTools";
import ContainerUser from "./ContainerUser";
import "../styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <ContainerUser />
      <ContainerTools />
    </header>
  );
}

export default Header;
