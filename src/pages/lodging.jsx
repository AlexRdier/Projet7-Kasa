import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import TagName from "../components/TagName";
import starFull from "../img/starFull.svg";
import starEmpty from "../img/starEmpty.svg";
import Collapse from "../components/Collapse";
import Error404 from "./Error404";
import Footer from "../components/Footer";

const Lodging = () => {
  // Import contexte (data)
  const data = useContext(AppContext);
  // Stockage URL
  const urlId = useParams().id;
  // Etat de base de données spécifiques
  const [lodgingData, setLodgingData] = useState({
    cover: "",
    description: "",
    equipments: [],
    host: { name: "", picture: "" },
    id: "",
    location: "",
    pictures: [],
    rating: "",
    tags: [],
    title: "",
  });

  // Stockage des données lodging correspondant
  useEffect(() => {
    const pushLodgingData = async () => {
      // Recherche des données lodging correspondantes
      let found = data.find((o) => o.id === urlId);
      // Push les données dans lodgingData
      await setLodgingData(found);
      // Aller en haut de la page lors du re-renden
      window.scrollTo(0, 0);
    };
    pushLodgingData();
  });
  // Gestion des erreurs si l'identifiant de lodging est incorrect
  if (lodgingData === undefined) {
    return <Error404 />;
  }
  // Affiche un spinner de chargement si les données sont longues à stocker
  if (!lodgingData) {
    return (
      <div>
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    );
  }

  // Séparation du nom et du prénom de data
  let name = lodgingData.host.name.split(" ");

  return (
    <div className="lodging_page">
      <div className="main_content">
        <Header />
        {/* Si loadgingData est correct, affiche ceci */}
        {lodgingData && (
          <section>
            <>
              <Slideshow data={lodgingData.pictures} />
              <div className="lodging_block">
                <div className="lodging_block_infos">
                  <div className="lodging_block_infos_item title-location">
                    <h2>{lodgingData.title}</h2>
                    <p>{lodgingData.location}</p>
                  </div>
                  <div className="lodging_block_infos_item tagName">
                    {/* Création d'un élément de balise pour chaque balise présente dans les data*/}
                    {lodgingData.tags.map((tag, index) => {
                      return <TagName tag={tag} key={index} />;
                    })}
                  </div>
                </div>
                <div className="lodging_block_infos flexBlock">
                  <div className="lodging_block_infos_item hostInfos">
                    <div className="hostInfos_name">
                      <p>{name[0]}</p>
                      <p>{name[1]}</p>
                    </div>
                    <div className="host_picture">
                      <img src={lodgingData.host.picture} alt="host-pic" />
                    </div>
                  </div>
                  <div className="lodging_block_infos_item rating">
                    {/* Création d'un affichage différent des étoiles pour chaque note d'hôte */}
                    {lodgingData.rating == 1 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating == 2 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating == 3 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating == 4 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating == 5 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Différenciez les composants className en fonction de l'emplacement de la page */}
              <div className="collapse_box-lodging">
                <Collapse
                  label="Description"
                  content={lodgingData.description}
                />
                <Collapse
                  label="Équipements"
                  content={
                    <ul>
                      {/* Création d'un li pour chaque index de data dans Équipements */}
                      {lodgingData.equipments.map((equipement, index) => {
                        return <li key={index}>{equipement}</li>;
                      })}
                    </ul>
                  }
                />
              </div>
            </>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Lodging;
