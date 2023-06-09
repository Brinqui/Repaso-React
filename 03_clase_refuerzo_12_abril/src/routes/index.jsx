import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import About from "../pages/About";
import Peliculas from "../pages/Peliculas";
import PeliculaSeleccionada from "../pages/PeliculaSeleccionada";
import getMovieId from "../helpers/getMovieId";
//Crear obligatoriamente un router

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      // Index es el elemento que se usa de portada
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/peliculas", element: <Peliculas /> },
      {
        path: "/peliculas/:id",
        element: <PeliculaSeleccionada />,
        loader: ({ params }) => getMovieId(params.id),
      },
    ],
  },
]);
