import { useQuery, gql } from "@apollo/client";
import React from "react";
import Card from "../card/Card";
import "./grid-cards.css";

const GridCards = ({ code, variant }) => {
  const { error, data } = useQuery(GRID_CARDS_QUERY, {
    variables: {
      where: { code_contains: code },
      order:'sort_ASC'
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  const cards = data.simplePostCollection.items;

  return (
    <div>
      <div className="grid-container">
        {cards &&
          cards.map((cardInfo, index) => (
            <Card variant={variant} imageUrl={cardInfo.mainPicture?.url} code={cardInfo.code} name={cardInfo.title} shortDescription={cardInfo.shortDescription} key={index} />
          ))}
      </div>
    </div>
  );
};

export default GridCards;

const GRID_CARDS_QUERY = gql`
query simplePostCollection($where: SimplePostFilter, $order: [SimplePostOrder]) {
  simplePostCollection(where: $where, order:$order) {
    items {
      code
      title
      shortDescription
      isDescriptionHtml
      mainPicture {
        url
      }
    }
  }
}
`;
