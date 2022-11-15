import React from "react";
import ContainerTools from "./ContainerTools";
import ContainerUser from "./ContainerUser";
import "../styles/Header.scss";
import { getUsers } from "../hooks/useGetUsers";

function Header() {
  const users = getUsers();
  return (
    <header className="header">
      {users.map((user) => (
        <ContainerUser
          to={`/user/${user.userName}`}
          key={user.userName}
          title={user.name}
        />
      ))}
      <ContainerTools />
    </header>
  );
}

export default Header;
