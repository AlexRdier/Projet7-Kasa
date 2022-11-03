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
  const data = useContext(AppContext);
  const urlId = useParams().id;
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

  useEffect(() => {
    const pushLodgingData = async () => {
      let found = data.find((o) => o.id === urlId);
      await setLodgingData(found);
      window.scrollTo(0, 0);
    };
    pushLodgingData();
  });
  if (lodgingData === undefined) {
    return <Error404 />;
  }
  if (!lodgingData) {
    return (
      <div>
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    );
  }

  let name = lodgingData.host.name.split(" ");

  return (
    <div className="lodging_page">
      <div className="main_content">
        <Header />
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
                    {lodgingData.rating === 1 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating === 2 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating === 3 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating === 4 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating === 5 && (
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
              <div className="collapse_box-lodging">
                <Collapse
                  label="Description"
                  content={lodgingData.description}
                />
                <Collapse
                  label="Équipements"
                  content={
                    <ul>
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
