import { gql, useQuery } from "@apollo/client";
import React from "react";
import CardGalery from "../common/CardGalery";
import "../common/CardGalery.css";

const GaleryEsmeralda = () => {
  const { error, data } = useQuery(GALERY_NUEVA_ESMERALDA);

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const [galery] = data.galeryCollection.items;
  const dataIMG = galery.imageCollection.items;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{galery.name}</h1>
      <div className="grid-container">
        {dataIMG.map((itemImage, index) => (
          <div key={index}>
            <CardGalery infoImage={itemImage} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GaleryEsmeralda;

const GALERY_NUEVA_ESMERALDA = gql`
  query {
    galeryCollection {
      items {
        name
        imageCollection {
          items {
            title
            fileName
            url
            description
          }
        }
      }
    }
  }
`;
