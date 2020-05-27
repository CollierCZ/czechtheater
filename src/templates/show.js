import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/layout";
import Gallery from "../components/Gallery/Gallery";
import Img from "gatsby-image";
import SEO from "../components/SEO/seo";
import "./show.css";

const Show = ({ data }) => {
  const show = data.kontentItemShow.elements;
  const mainImage = show.main_image.value[0].localFile.childImageSharp.fluid;
  return (
    <Layout>
      <SEO
        image={mainImage.src}
        description={show.short_description.value}
        title={show.name.value}
        keywords={[`czech`, `theater`, `show`]}
      />
      <h1>{show.name.value}</h1>
      <Img
        style={{
          maxHeight: mainImage.presentationHeight,
          maxWidth: mainImage.presentationWidth
        }}
        fluid={mainImage}
        alt={mainImage.description}
      />
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
                fluid(
                  maxWidth: 800
                  maxHeight: 668
                  fit: CONTAIN
                  srcSetBreakpoints: [500, 980, 1200]
                  background: "rgba(255,255,255,1)"
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  presentationHeight
                  presentationWidth
                }
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
            fixed {
              src
            }
            fluid(maxHeight: 250, maxWidth: 250, fit: "crop") {
              ...KontentAssetFluid_withWebp
            }
            description
          }
        }
      }
    }
  }
`;
