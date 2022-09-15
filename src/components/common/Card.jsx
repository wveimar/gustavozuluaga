import React from "react";
import * as style from "./card.module.css"

const Card = ({info}) => {
  return (

      <a href={`/page?code=${info.code}`} className={style.card}>
        <img src={info.image.url} alt="image" className={style.img}/>
        <div className={style.container}>
          <h4>
            <b>{info.name}</b>
          </h4>
          <p>{info.shortDescription}</p>
        </div>
      </a>

  );
};

export default Card;
