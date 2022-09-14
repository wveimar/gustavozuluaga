import React from "react";
import './CardGalery.css'

const CardGalery = ({infoImage}) => {
  return (
    <div className="grid-container">
        <article id="3685" class="location-listing">
          <p className="location-title">{infoImage.description}</p>
          <div className="location-image">
            <img
              src={infoImage.url}
              alt={infoImage.title}
              height="300"
              width="300"
            />
          </div>
        </article>
    </div>
  );
};

export default CardGalery;
