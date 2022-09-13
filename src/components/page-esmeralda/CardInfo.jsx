import { useQuery, gql } from "@apollo/client";
import React from "react";
import Card from "../common/Card";

const CartInfo = () => {
  const { error, data } = useQuery(CARD_QUERY, {
    variables: {
      where: { parentCode_contains: "comunidad-nueva-esmeralda" },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const dataCard = data.simplePageCollection.items;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {dataCard && dataCard.map((cardInfo) => <Card info={cardInfo} />)}
      </div>
    </div>
  );
};

export default CartInfo;

const CARD_QUERY = gql`
  query simplePageCollection($where: SimplePageFilter) {
    simplePageCollection(where: $where) {
      items {
        code
        name
        description
        image {
          url
        }
      }
    }
  }
`;
