import React from "react";
import { graphql, Link } from "gatsby";
import { ImageElement, RichTextElement } from "@kontent-ai/gatsby-components";

import Layout from "../layout/layout";
import Gallery from "../components/Gallery/Gallery";
import Seo from "../components/Seo/Seo";
import TicketLink from "../components/TicketLink/TicketLink";
import "./show.css";

const Show = ({ data }) => {
  const show = data.kontentItemShow.elements;
  const mainImage = show.main_image.value[0];

  const sizeProps = mainImage.width > mainImage.height ? {width: 600} : {height: 501}
  return (
    <Layout>
      <Seo
        image={mainImage.url}
        description={show.short_description.value}
        title={show.name.value}
        keywords={[`czech`, `theater`, `show`]}
      />
      <h1>{show.name.value}</h1>
      <ImageElement
        image={mainImage}
        alt={mainImage.description || ""}
        layout="constrained"
        {...sizeProps}
        backgroundColor="rgba(255,255,255,1)"
        placeholder="blurred"
      />
      <RichTextElement
        className="showDescription"
        value={show.description.value}
        links={show.description.links}
        resolveLink={(link, domNode) => <Link to={`/${link.url_slug}`}>{domNode.children[0].data}</Link>}
      />
      {show.ticket_link.value ? <TicketLink link={show.ticket_link.value} /> : null}
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
          links {
            url_slug
            link_id
          }
          value
        }
        main_image {
          value {
            description
            url
            width
            height
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
            description
            url
          }
        }
      }
    }
  }
`;
