import React from "react";
import * as style from "./card.module.css"

const Card = ({info}) => {
  console.log(info)
  return (
    <div>
      <div className={style.card}>
        <img src={info.image.url} alt="image" width={250} height={250} className={style.img}/>
        <div className={style.container}>
          <h4>
            <b>{info.name}</b>
          </h4>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
