import React from "react";
import libros from "../data/libros.json";
import Item from "./Item";
const ListaItems = () => {
  return( 
  <div>
    {
      libros.map(libro=>{
        return (<Item key={libro.id}{...libro}/>)
      })
    }
    </div>)
};

export default ListaItems;
