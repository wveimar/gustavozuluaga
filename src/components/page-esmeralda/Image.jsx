import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./image.css";

const Image = () => {
  const { error, data } = useQuery(SIMPLE_IMAGE, {
    variables: {
      where: { code_contains: "image-head-esmeralda" },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const [image] = data.simplePageCollection.items;
  // console.log(image);
  return (
    <div className="container">
      <div className="container-text">
        <h2>{image.description}</h2>
      </div>
      <div className="container-img">
        <img src={image.image.url} alt="image head" />
      </div>
    </div>
  );
};

export default Image;

const SIMPLE_IMAGE = gql`
  query simplePageCollection($where: SimplePageFilter) {
    simplePageCollection(where: $where) {
      items {
        name
        description
        image {
          url
        }
      }
    }
  }
`;
