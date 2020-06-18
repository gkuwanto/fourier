import React from "react";

import "./card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <span className="summary">
        <div>
          <p>{props.summary}</p>
          <a href={props.link}> Read More</a>
        </div>
      </span>
      <h3>{props.title}</h3>
      <img className="overlay" src={props.image} alt={props.summary} />
    </div>
  );
};

export default Card;
