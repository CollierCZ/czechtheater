import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, image, keywords, title }) => {
  const { kontentItemBasicInfo } = useStaticQuery(graphql`
    query {
      kontentItemBasicInfo {
        ...BasicInfoFragment
      }
    }
  `)

  const info = kontentItemBasicInfo.elements;
  const homeTitle = info.name.value;
  const logo = info.favicon.value[0].url;
  const ogImage = image ? image : logo;
  const metaDescription = description ? description : info.short_description.value;

  return (
    <Helmet
      htmlAttributes={{lang: "en"}}
      title={title}
      titleTemplate={title !== homeTitle ? `%s | ${homeTitle}` : "%s"}
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

Seo.defaultProps = {
  keywords: [`theater`, `czech`, `amateur`],
  title: "Czech Theater"
}

Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default Seo