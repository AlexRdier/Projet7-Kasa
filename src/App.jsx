import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { AppContext } from "./AppContext";
import RoutesConfig from "./routes/RoutesConfig";
import dataJson from "./data/logements.json";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(dataJson);
    };
    fetchData();
  }, []);

  return (
    <HashRouter>
      <AppContext.Provider value={data}>
        <RoutesConfig />
      </AppContext.Provider>
    </HashRouter>
  );
};

export default App;
