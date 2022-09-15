import { useQuery, gql } from "@apollo/client";
import React from "react";
import Card from "../common/Card";
import * as styles from "./cardInfo.module.css";

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
      <div className={styles.container}>
        {dataCard &&
          dataCard.map((cardInfo, index) => (
            
              <Card info={cardInfo} key={index} />
            
          ))}
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
        shortDescription
        description
        image {
          url
        }
      }
    }
  }
`;
