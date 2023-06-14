// imports
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import getMoviedb from "../helpers/getMovieDB";

//stateInitial
const stateInitialPelicula = [];
const Peliculas = () => {
  // estados
  const [pelicula, setPelicula] = useState(stateInitialPelicula);
  // efectos
  useEffect(() => {
    traerPelicula();
  }, []);

  // lógica funcional
  const traerPelicula = async () => {
    getMoviedb()
      .then((peliculas) => setPelicula(peliculas))
      .catch((error) => console.error(error));
  };
  console.log(pelicula);
  return (
    <>
    {pelicula.map((peli) => (
      <Link to={`/peliculas/${peli.id}`}>
      <Card
      className="text-center mb-4"
      border="secondary"
      style={{ width: "25rem" }}
      
      >
      <Card.Img
        className="mx-auto mt-3"
        style={{ width: "60%" }}
        src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+peli.poster_path}
        alt={peli.title}
        />
      <Card.Body className="mx-3">
        <Card.Title>{peli.title}</Card.Title>
        <Card.Text className="mb-2 text-muted">{peli.overview}</Card.Text>
      </Card.Body>
    </Card>
      </Link>
    ))}
    </>
  );
};

export default Peliculas;
