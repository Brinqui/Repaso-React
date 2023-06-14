import React, { useContext } from "react";
import { usuarioContext } from "../App";

const Hijo = () => {
  const { user, setUser } = useContext(usuarioContext);
  return (
    <>
      <div>Soy el Hijo</div>
      <div>{user && <p>Bienvenido {user.nombre}</p>}</div>
    </>
  );
};

export default Hijo;
