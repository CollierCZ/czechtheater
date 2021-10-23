import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const PureSeo = ({ description,image,data,keywords,pageTitle }) => {
  const info = data.kontentItemBasicInfo.elements;
  const homeTitle = info.name.value;
  const logo = info.favicon.value[0].url;
  const ogImage = image ? image : logo;
  const metaDescription = description ? description : info.short_description.value;
  const title = pageTitle ? pageTitle : homeTitle;
  return (
    <Helmet
      htmlAttributes={{lang: "en"}}
      title={title}
      titleTemplate={`%s | ${homeTitle}`}
      link={[
        {"rel": "icon", 
        "type": "image/png", 
        "href": logo
        }
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
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
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Czech Theater`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
      .concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
    />
  )
}

PureSeo.defaultProps = {
  keywords: [`theater`, `czech`, `amateur`],
  pageTitle: "Czech Theater"
}

PureSeo.propTypes = {
  data: PropTypes.object.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pageTitle: PropTypes.string.isRequired,
}

function Seo({ description, image, keywords, title }) {
  return (
    <StaticQuery
      query={graphql`
        query SEOQuery {
          kontentItemBasicInfo {
            ...BasicInfoFragment
          }
        }
      `}
      render={data => {
        return (
          <PureSeo description={description} image={image} data={data} keywords={keywords} pageTitle={title} /> 
        )
      }}
    />
  )
}

Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default Seo