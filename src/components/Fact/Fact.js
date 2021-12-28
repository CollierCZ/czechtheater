import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import "./Fact.css";

const Fact = ({ fact }) => {
  console.log(fact)
  const description = fact.elements.description;
  return (
    <div className="fact">
      <RichTextElement
        className="factText"
        value={description.value}
        links={description.links}
        resolveLink={(link, domNode) => {
          return (
            <Link to={`/${link.url_slug}`}>{domNode.children[0].data}</Link>
          );
        }}
      />
      {fact.elements.image.value[0] ? (
        <GatsbyImage
          image={
            fact.elements.image.value[0].localFile.childImageSharp
              .gatsbyImageData
          }
          alt=""
          className="factImage"
        />
      ) : null}
    </div>
  );
}

export default Fact;
