import { gql, useQuery } from "@apollo/client";
import React from "react";

import Container from "./Container";
import * as styles from "./footer.module.css";

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
  console.log(items);

  return (
    <Container as="footer">
      <div className={styles.container}>
        {items.map((item) => (
          <div>
            <img src={item.url} alt={item.title} />
          </div>
        ))}
      </div>
      <div className={styles.description}>
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
