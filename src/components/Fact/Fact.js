import React from "react";
import { Link } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { ImageElement } from "@kentico/gatsby-kontent-components"
import "./Fact.css";

const FactImage = ({ image }) => {
  if (image.width > image.height) {
    return <ImageElement
      image={image}
      width={250}
      alt=""
      className="factImage"
      layout={"constrained"}
      backgroundColor={"rgba(255,255,255,1)"}
    />
  }
  return <ImageElement
    image={image}
    height={150}
    className="factImage"
    layout={"constrained"}
    backgroundColor={"rgba(255,255,255,1)"}
  />

}

const Fact = ({ fact }) => {
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
        <FactImage
          image={
            fact.elements.image.value[0]
          }
        />
      ) : null}
    </div>
  );
}

export default Fact;
