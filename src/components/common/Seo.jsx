import * as React from 'react'
import { Helmet } from 'react-helmet'
import { gql, useQuery } from "@apollo/client";

const Seo = () => {
    const { error, data } = useQuery(SEO_QUERY);
    if (error && error.networkError) {
      return <p>Error: {error.networkError.result.errors[0].message}</p>;
    }
    if (!data) {
      return <p>No Data!</p>;
    }
  
    const {items} = data.menuNavigationCollection;
    { description = '', lang = 'en', meta = [], title, image }
    const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo


const SEO_QUERY = gql`
query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;