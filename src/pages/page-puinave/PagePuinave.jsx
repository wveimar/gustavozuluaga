import { gql, useQuery } from "@apollo/client";
import React from "react";
import Image from "../../components/image/Image";
import PageSection from "../../components/page-section/PageSection";
import GridCards from "../../components/grid-cards/GridCards";
import GridMedia from "../../components/grid-media/GridMedia";

const PagePuinave = ({ pageCode }) => {
  console.log(pageCode);
  const { error, data } = useQuery(PAGE_PUINAVE_QUERY, {
    variables: {
      where: { code_contains: pageCode },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const [image] = data.simplePageCollection.items;

  return (
    <div style={{ margin: "40px" }}>
      <Image description={image.description} url={image.image.url} />
      <PageSection sectionCode="s1" code={pageCode}>
        <GridCards variant="card-link" code={`${pageCode}-s1`} />
      </PageSection>
      <PageSection sectionCode="s4" code={pageCode}>
        <GridCards variant="blog" code={`${pageCode}-s4`} />
      </PageSection>
      <PageSection sectionCode="s5" code={pageCode}>
        <GridMedia code={`${pageCode}`} />
      </PageSection>
      <PageSection sectionCode="s6" code={pageCode}>
        <GridMedia code={`${pageCode}`} />
      </PageSection>
    </div>
  );
};

export default PagePuinave;

const PAGE_PUINAVE_QUERY = gql`
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
