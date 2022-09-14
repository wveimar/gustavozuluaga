import { useQuery, gql } from "@apollo/client";
import React from "react";

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
    <div>
      <div
        style={{
          color: "white",
          position: "absolute",
          width: "80%",
          marginTop: "3rem",
          marginLeft: "1rem",
          marginRight: "1rem",
          textAlign: "center",
          background: "black",
          opacity: 0.6,
          padding: "2rem",
        }}
      >
        <h2>{image.description}</h2>
      </div>
      <div>
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
