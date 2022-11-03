import React from "react";

const Banner = ({ location }) => {
  return (
    // Différencie les composants className en fonction de l'emplacement de la page avec des props
    <div className={"banner_container" + location}>
      <p>
        Chez vous, <span>partout et ailleurs</span>
      </p>
    </div>
  );
};

export default Banner;