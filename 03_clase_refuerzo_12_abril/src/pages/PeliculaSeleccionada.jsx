import React, { useState } from "react";
import getMovieId from "../helpers/getMovieId";
import { Link, useParams } from "react-router-dom";

const PeliculaSeleccionada = () => {
  const [pelicula, setPelicula] = useState({});
  const { id } = useParams();
  const getData = () => {
    getMovieId(id)
      .then((pelicula) => {
        setPelicula(pelicula);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <h1>{pelicula.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${pelicula.poster_path}`}
        alt=""
      />
      <Link to={"/"}>Volver</Link>
    </>
  );
};

export default PeliculaSeleccionada;
