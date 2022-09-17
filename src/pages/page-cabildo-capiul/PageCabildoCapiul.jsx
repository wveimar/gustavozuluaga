import React from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "../../components/image/Image";
import GridCards from "../../components/grid-cards/GridCards";
import PageSection from "../../components/page-section/PageSection";


const PageCabildoCapiul = ({ pageCode }) => {
  const { error, data } = useQuery(PAGE_CABILDO_CAPIUL_QUERY, {
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
    <>
      <div style={{ margin: "40px" }}>
        <Image description={image.description} url={image.image.url} />
        <PageSection sectionCode="s1" code={pageCode}>
          <GridCards variant="card-link" code={`${pageCode}-s1`} />
        </PageSection>
        {/* <PageSection sectionCode="s2" code={pageCode}>
          <GridPosts variant="simple-post" code={`${pageCode}-s2`} />
        </PageSection> */}
        {/* <PageSection sectionCode="s3" code={pageCode}>
          <Gallery code={pageCode} />
        </PageSection> */}
        <PageSection sectionCode="s4" code={pageCode}>
          <GridCards variant="blog" code={`${pageCode}-s4`} />
        </PageSection>    
      </div>
    </>
  );
};
export default PageCabildoCapiul;

const PAGE_CABILDO_CAPIUL_QUERY = gql`
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
