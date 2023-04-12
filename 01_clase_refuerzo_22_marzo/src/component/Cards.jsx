// Imports
import React, { useEffect, useState } from "react";
import getPersonajes from "../helper/getPersonajes";
import Card from "./Card";

// Zona de variables globales
const initialStatePersonajes = [];

const Cards = () => {
  // Estados
  const [personajes, setPersonajes] = useState(initialStatePersonajes);

  // Efectos
  useEffect(() => {
    pintarPersonajes();
  }, []);

  // Lógica
  const pintarPersonajes = () => {
    getPersonajes()
      .then((datos) => {
        setPersonajes(datos);
        console.log("Datos api: ", datos);
      })
      .catch((error) => console.log(error));
  };
  const handleDeletePersonaje = () => {
    setPersonajes(personajes.filter(index=>index !== index));
  };
  // Pintamos la información
  return (
    <>
      {personajes.map((personaje, index) => (
        <div className="card" key={index}>
          <Card key={index} personaje={personaje}/>
          <button
            className="btn btn-outline-info"
            onClick={() => handleDeletePersonaje(index)}
          >
            🗑
          </button>
        </div>
      ))}
    </>
  );
};

export default Cards;
