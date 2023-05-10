import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return(
    <>
      <div id="fallo">
        <h1>Te has equivocado, aquí no es😅</h1>
        <Link to="/">Volver a Home</Link>
      </div>
    </>
  )
};

export default Error;
