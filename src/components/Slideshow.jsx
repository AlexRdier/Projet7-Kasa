import React, { useState } from "react";
import leftArrow from "../img/VectorLeft.svg";
import rightArrow from "../img/VectorRight.svg";

const Slideshow = (data) => {
  // Définition de l'état initial de l'index du Slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  // Réglage du changement d'image précédente
  const previousPicture = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Réglage du changement d'image suivante
  const nextPicture = () => {
    const isLastSlide = currentIndex === data.data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow_container">
      {/* Si la longueur des données > 1, affiche les flèches */}
      {data.data.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt=""
            className="slideshow_container_arrow leftArrow"
            onClick={previousPicture}
          />
          <img
            src={rightArrow}
            alt=""
            className="slideshow_container_arrow rightArrow"
            onClick={nextPicture}
          />
        </>
      )}
      {/* Affiche l'index de l'image du Slideshow */}
      <div className="slideshow_container_pictures">
        <img src={data.data[currentIndex]} alt="" />
      </div>
      <div className="slideshow_container_numbers">
        <p>{currentIndex + 1 + "/" + data.data.length}</p>
      </div>
    </div>
  );
};

export default Slideshow;
