import React, { useContext } from "react";
import { usuarioContext } from "../App";

const Hijo2 = () => {
  const { user, setUser } = useContext(usuarioContext);
  const handleCambiarUsuario = () => {
    // Cambiar el valor de user.
    setUser({ nombre:"Juan",correo:"Carlos" });
  };
  return (
    <>
      <div>Soy el hijo2</div>
      <button onClick={handleCambiarUsuario}>Cambiar usuario</button>
    </>
  );
};

export default Hijo2;
