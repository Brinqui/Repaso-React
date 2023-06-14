import React from "react";
import { carritoContext } from "../contexts/CarritoContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

const Navbar = () => {
  const [cart, setCart] = useContext(carritoContext);
  const cantidad = cart.length;
  return (
    <nav>
      <Link to={"/"}>
        <h2>Carrito de compra</h2>
      </Link>
      <Link to={"/carrito"}>
        Items en el carrito: <span>{cantidad}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
