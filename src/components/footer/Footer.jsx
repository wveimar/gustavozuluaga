import { gql, useQuery } from "@apollo/client";
import React from "react";

import Container from "../common/Container";
import "./footer.css";

const Footer = () => {
  const { error, data } = useQuery(FOOTER_INFO_QUERY);

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const infoFooter = data.footerCollection.items[0];

  const { descriptionFooter } = infoFooter;
  const { items } = infoFooter.imagesCollection;

  return (
    <Container as="footer">
      <div className="container">
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.url} alt={item.title} />
          </div>
        ))}
      </div>
      <div className="description">
        <p>{descriptionFooter}</p>
      </div>
    </Container>
  );
};

export default Footer;

const FOOTER_INFO_QUERY = gql`
  query {
    footerCollection {
      items {
        title
        descriptionFooter
        imagesCollection {
          items {
            title
            url
          }
        }
      }
    }
  }
`;
