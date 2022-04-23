import React from "react";
import "./HomePageFeaturesCard.css";

const HomePageFeaturesCard = (props) => {
  return (
    <div className="feature-card">
      <img src={props.imgsrc} alt="Image not Loaded" />
      <h3>{props.text}</h3>
    </div>
  );
};

export default HomePageFeaturesCard;
