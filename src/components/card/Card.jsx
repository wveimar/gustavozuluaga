import React from "react";
import "./card.css";

const Card = ({ code, variant, imageUrl, name, shortDescription }) => {
  let cardTemplate = <></>;
  switch (variant) {
    case "card-link":
      cardTemplate = (
        <a href={`/post?code=${code}`} className="card">
          <img src={imageUrl} alt="image" className="img" />
          <div className="card-container">
            <h4>
              <b>{name}</b>
            </h4>
            <p>{shortDescription}</p>
          </div>
        </a>
      );
      break;

    case "blog":
      cardTemplate = (
        <a href={`/post?code=${code}&variant=detail`} className="card">
          <div className="card-container">
            <h4>
              <b>{name}</b>
            </h4>
            <p>{shortDescription}</p>
          </div>
        </a>
      );
      break;
  }

  return cardTemplate;
};

export default Card;
