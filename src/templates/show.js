import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import Gallery from "../components/Gallery/Gallery"
import SEO from "../components/SEO/seo"
import "./show.css"

const Show = ({data}) => {
  const show = data.kontentItemShow.elements;
  const mainImage = show.main_image.value[0];
  return (
    <Layout>
        <SEO image={mainImage.url} description={show.short_description.value} title={show.name.value} keywords={[`czech`, `theater`, `show`]} />
        <h1>{show.name.value}</h1>
        <div className="mainImage">
            <img
                srcSet={
                    mainImage.url + `?w=400&fit=crop 400w, ` +
                    mainImage.url + `?w=800&fit=crop 800w, ` +
                    mainImage.url + `?w=1200&fit=crop 1200w, `
                } 
                sizes="(max-width: 400px) 360px,(max-width: 800px) 760px,(max-width: 1200) 1140px"
                src={mainImage.url} alt={mainImage.description} />
        </div>
        <div className="showDescription" dangerouslySetInnerHTML={{ __html: show.description.resolvedData.html}} />
        {show.ticket_link.value
            ?  
            <h4 className="tickets"><a href={show.ticket_link.value}>Tickets</a></h4>
            : null
        }
        {show.gallery.value[0]
            ?  
            <Gallery images={show.gallery.value} />
            : null
        }
      
      </Layout>
  )
}

export default Show


export const query = graphql`
  query show ($slug: String!) {
    kontentItemShow (fields: { slug: { eq: $slug } }) {
      elements {
        name {
            value
          }
          description {
            resolvedData {
              html
            }
          }
          main_image {
            value {
                url
                description
              }
          }
          short_description {
            value
          }
          ticket_link {
            value
          }
          gallery {
            value {
              url
              description
            }
          }
      }
    }
}
`