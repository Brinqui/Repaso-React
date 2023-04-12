import React from "react";

const Card = ({personaje,index}) => {
  return (
    <div className="card-body">
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/characters/${
          index + 1
        }.jpg`}
        alt={personaje.name}
        width="50%"
      />
      <h5 className="card-body">{personaje.name}</h5>
      <p className="card-text">{personaje.gender}</p>
      
    </div>
  );
};

export default Card;
