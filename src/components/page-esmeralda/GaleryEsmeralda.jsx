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
    <div style={{textAlign: "center",  marginTop: "4rem"}}>
      <h1>{galery.name}</h1>
      <p style={{marginBottom: "4rem"}}>{galery.description}</p>
      <div className="grid-container">
        {dataIMG.map((itemImage, index) => (
          <div key={index}>
            <CardGalery infoImage={itemImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleryEsmeralda;

const GALERY_NUEVA_ESMERALDA = gql`
  query {
    galeryCollection {
      items {
        name
        description
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
