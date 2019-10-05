import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import Gallery from "../components/Gallery/Gallery"
import SEO from "../components/seo"

const Show = ({data}) => {
  const show = data.kenticoCloudItemShow.elements;
  const mainImage = show.main_image.assets[0];
  return (
    <Layout>
        <SEO title={show.name.value} keywords={[`czech`, `theater`, `show`]} />
        <h1>{show.name.value}</h1>
        <div className="mainImage">
            <img 
                srcSet={
                    mainImage + `?w=400&fit=crop 400w, ` +
                    mainImage + `?w=800&fit=crop 800, ` +
                    mainImage + `?w=1200&fit=crop 1200, `
                } 
                sizes="(max-width: 400px) 360px,
                    (max-width: 800px) 760px,
                    (max-width: 1200) 1140px"
                src={mainImage.url} alt={mainImage.description} />
        </div>
        <div className="showDescription" dangerouslySetInnerHTML={{ __html: show.description.resolvedHtml}} />
        {show.ticket_link.value
            ?  
            <h4 className="tickets"><a href={show.ticket_link.value}>Tickets</a></h4>
            : null
        }
        {show.gallery.assets[0]
            ?  
            <Gallery images={show.gallery.assets} />
            : null
        }
      
      </Layout>
  )
}

export default Show


export const query = graphql`
  query show ($slug: String!) {
    kenticoCloudItemShow (fields: { slug: { eq: $slug } }) {
      elements {
        name {
            value
          }
          description {
            resolvedHtml
          }
          main_image {
              assets {
                url
                description
              }
          }
          ticket_link {
            value
          }
          gallery {
            assets {
              url
              description
            }
          }
      }
    }
}
`