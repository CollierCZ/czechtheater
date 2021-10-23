import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/layout";
import Gallery from "../components/Gallery/Gallery";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/Seo/Seo";
import "./show.css";

const Show = ({ data }) => {
  const show = data.kontentItemShow.elements;
  const mainImage =
    show.main_image.value[0].localFile.childImageSharp.gatsbyImageData;
  return (
    <Layout>
      <Seo
        image={mainImage.src}
        description={show.short_description.value}
        title={show.name.value}
        keywords={[`czech`, `theater`, `show`]}
      />
      <h1>{show.name.value}</h1>
      <GatsbyImage image={mainImage} alt={mainImage.description} />
      <div
        className="showDescription"
        dangerouslySetInnerHTML={{ __html: show.description.value }}
      />
      {show.ticket_link.value ? (
        <h4 className="tickets">
          <a href={show.ticket_link.value}>Tickets</a>
        </h4>
      ) : null}
      {show.gallery.value[0] ? <Gallery images={show.gallery.value} /> : null}
    </Layout>
  );
};

export default Show;

export const query = graphql`
  query show($slug: String!) {
    kontentItemShow(fields: { slug: { eq: $slug } }) {
      elements {
        name {
          value
        }
        description {
          value
        }
        main_image {
          value {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 600
                  height: 501
                  transformOptions: { fit: CONTAIN }
                  backgroundColor: "rgba(255,255,255,1)"
                  placeholder: BLURRED
                )
              }
            }
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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 284
                  placeholder: BLURRED
                  height: 284
                  transformOptions: { fit: COVER }
                )
              }
            }
            description
            url
          }
        }
      }
    }
  }
`;
