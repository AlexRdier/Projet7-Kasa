import React, { useState } from "react";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse_container">
      <div className="button_container" onClick={toggle}>
        <div className="collapse_button">
          {" "}
          <p>{props.label}</p>{" "}
        </div>
        {open ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {open && <div className="collapse_content"> {props.content} </div>}
    </div>
  );
};

export default Collapse;