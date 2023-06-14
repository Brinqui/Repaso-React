import React from "react";
import { useContext } from "react";
import { carritoContext } from "../contexts/CarritoContext";

const Item = ({ id, nombre, imagen,precio }) => {
  const [cart,setCart] = useContext(carritoContext);
  const handleAdd = () => {
    setCart([...cart,{id,nombre,imagen,precio}])
  };
  const handleDelete = () =>{
    setCart(...cart);
  }
  return (
    <>
      <div>
        <h2>Tarjeta Libro</h2>
        <h3>Id: {id}</h3>
        <h4>Título: {nombre}</h4>
        <h4>Precio: {precio}€</h4>
        <img src={imagen} />
      </div>
      <div>
        <button onClick={handleAdd}>Añadir</button>
        <button onClick={handleDelete}>Quitar</button>
      </div>
    </>
  );
};

export default Item;
