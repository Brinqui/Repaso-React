import React from "react";
import { useContext } from "react";
import { carritoContext } from "../contexts/CarritoContext";

const CarritoCompra = () => {
  const [cart, setCart] = useContext(carritoContext);
  const precioTotal = cart.reduce((acumulador, valorActual) => {
    return acumulador + valorActual.precio;
  },0);
  return (
    <>
      <div>
        <h2>CarritoCompra</h2>
      </div>
      <div>Precio a pagar: {precioTotal}€;</div>
    </>
  );
};

export default CarritoCompra;
