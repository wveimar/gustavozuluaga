import React from "react";
import { gql, useQuery } from "@apollo/client";


function SimplePageContentful({code}) {
  if (!code) {
    return <p>No Code!</p>;
  }
  const { error, data } = useQuery(SIMPLE_PAGE_QUERY, {
    variables: {
      where: { code_contains: code },
    },    
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
    
  }
  const [page] = data.simplePageCollection.items;
  
  return (
    <div>
      <img width={500} src={page && page.image.url}></img>
      <h5>{page && page.name}</h5>
      <p>{page && page.description}</p>
    </div>
  );
}

export default SimplePageContentful;

const SIMPLE_PAGE_QUERY = gql`
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
