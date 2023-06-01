import { gql, useQuery } from "@apollo/client";
import Image from "../../components/image/Image";
import PageSection from "../../components/page-section/PageSection";
import GridCards from "../../components/grid-cards/GridCards";
import Gallery from "../../components/gallery/Gallery";

const PageJiw = ({ pageCode }) => {
  const { error, data } = useQuery(PAGE_JIW_QUERY, {
    variables: {
      where: { code_contains: pageCode },
    },
  });

  console.log(pageCode);
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
      <PageSection sectionCode="s2" code={pageCode}>
        <Gallery code={`gallery-${pageCode}-s2`} />
      </PageSection>
      <PageSection sectionCode="s3" code={pageCode}>
        <Gallery code={`gallery-${pageCode}-s3`} />
      </PageSection>
      <PageSection sectionCode="s4" code={pageCode}>
        <Gallery code={`gallery-${pageCode}-s4`} />
      </PageSection>
      <PageSection sectionCode="s5" code={pageCode}>
        <Gallery code={`gallery-${pageCode}-s5`} />
      </PageSection>
      <PageSection sectionCode="s6" code={pageCode}></PageSection>
      <PageSection sectionCode="s7" code={pageCode}>
        <Gallery code={`gallery-${pageCode}-s7`} />
      </PageSection>
    </div>
  );
};

export default PageJiw;

const PAGE_JIW_QUERY = gql`
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
