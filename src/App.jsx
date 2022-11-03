import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { AppContext } from "./AppContext";
import RoutesConfig from "./routes/RoutesConfig";
import dataJson from "./data/logements.json";

const App = () => {
  const [data, setData] = useState([]);

  // Récupére et stocke les datas
  useEffect(() => {
    const fetchData = async () => {
      setData(dataJson);
    };
    fetchData();
  }, []);

  return (
    // Configuration du routeur
    <HashRouter>
      {/* Partager des données avec d'autres composants et pages grâce à useContext*/}
      <AppContext.Provider value={data}>
        <RoutesConfig />
      </AppContext.Provider>
    </HashRouter>
  );
};

export default App;
