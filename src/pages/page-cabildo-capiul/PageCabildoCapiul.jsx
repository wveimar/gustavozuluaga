import React from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "../../components/image/Image";
import GridCards from "../../components/grid-cards/GridCards";
import GridPosts from "../../components/grid-posts/GridPosts";
import PageSection from "../../components/page-section/PageSection";
import Gallery from "../../components/gallery/Gallery";
import GridMediaVariant from "../../components/grid-media/GridMediaVariant";


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
        <PageSection sectionCode="s2" code={pageCode}>
          <GridPosts variant="simple-post" code={`${pageCode}-s2`} />
        </PageSection>
        <PageSection sectionCode="s4" code={pageCode}>
          <GridCards variant="blog" code={`${pageCode}-s4`} />
        </PageSection>
        <PageSection sectionCode="s3" code={pageCode}>
        <Gallery code={`gallery-${pageCode}`} />
        </PageSection>
        <PageSection sectionCode="s5" code={pageCode}>
          <GridMediaVariant code={`${pageCode}`} groups={"vg0"} title={"Testimonio"}/>
          <GridMediaVariant code={`${pageCode}`} groups={"vg1"} title={"Lecciones"}/>
          <GridMediaVariant code={`${pageCode}`} groups={"vg2"} title={"Cantos"}/>
          <GridMediaVariant code={`${pageCode}`} groups={"vg3"} title={"Alfabeto de la lengua piinemuna"}/>
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
