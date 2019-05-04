import React from "react";
import "../css/pictures.css";

const Pictures = props => {
  const localPicClick = (e) => {
    props.picClicked(e.target.id);
  }
  // Display the pictures
  return <div onClick={localPicClick} className="pics col s12 m4 l3">
            <img src={props.src} alt={props.alt} id={props.id} />
        </div>;
};

export default Pictures;