import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const PureSEO = ({favicon,homeTitle,image,keywords,lang,metaDescription,title}) => {
  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | ${homeTitle}`}
      link={[
        {"rel": "icon", 
        "type": "image/png", 
        "href": favicon
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
          content: image,
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

PureSEO.propTypes = {
  homeTitle: PropTypes.string.isRequired,
  favicon: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

function SEO({ description, image, lang, keywords, title }) {
  return (
    <StaticQuery
      query={seoQuery}
      render={data => {
        const info = data.kenticoCloudItemBasicInfo.elements;
        const homeTitle = info.name.value;
        const favicon = info.favicon.assets[0].url;
        const ogImage = image ? image : favicon;
        const metaDescription = description ? description : info.short_description.value;
        return (
          <PureSEO homeTitle={homeTitle} favicon={favicon} image={ogImage} keywords={keywords} lang={lang} metaDescription={metaDescription} title={title} /> 
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const seoQuery = graphql`
  query SEOQuery {
    kenticoCloudItemBasicInfo {
      elements {
        name {
          value
        }
        short_description {
          value
        }
        favicon {
          assets{
            url
          }
        }
      }
    }
  }
`
