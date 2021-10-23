import React, { Component } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import "./Fact.css";

class Fact extends Component {
  render() {
    const { facts } = this.props;

    const currentFact =
      facts.nodes[Math.floor(Math.random() * facts.nodes.length)];
    const description = currentFact.elements.description;
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
        {currentFact.elements.image.value[0] ? (
          <GatsbyImage
            image={
              currentFact.elements.image.value[0].localFile.childImageSharp
                .gatsbyImageData
            }
            alt=""
            className="factImage"
          />
        ) : null}
      </div>
    );
  }
}

export default Fact;
