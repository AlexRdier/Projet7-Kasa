import React, { useState } from "react";

const Collapse = (props) => {
  // Paramètre collapse fermé
  const [open, setOpen] = useState(false);

  // Réglage du state opposé du collapse (toggle)
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse_container">
      {/* Au clic, toggle collapse */}
      <div className="button_container" onClick={toggle}>
        <div className="collapse_button">
          {" "}
          <p>{props.label}</p>{" "}
        </div>
        {/* si le collapse est ouvert, affiche ceci */}
        {open ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          // Sinon, affiche ceci
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {/* si le collapse est ouvert, affiche ceci */}
      {open && <div className="collapse_content"> {props.content} </div>}
    </div>
  );
};

export default Collapse;