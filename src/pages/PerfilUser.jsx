import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../hooks/useGetUsers";
import NotFound from "./NotFound";

export default function PerfilUser() {
  let params = useParams();
  let navigate = useNavigate();
  let user = getUser(params.userId);
  if (!user)
    return (
      <NotFound
        title={"Este usuario no existe en nuestra aplicación"}
        to={"/"}
      />
    );
  return (<>
  <h1>Hola mi nombre es {user.name}</h1>
  </>);
}
