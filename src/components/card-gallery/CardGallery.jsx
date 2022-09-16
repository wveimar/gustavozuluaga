import React from "react";
import './card-gallery.css'

const CardGallery = ({infoImage}) => {
  return (
    <div className="card-gallery">
        <article id="3685" className="location-listing">
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

export default CardGallery;
