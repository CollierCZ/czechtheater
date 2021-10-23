import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import "./Fact.css";

class Fact extends Component {
  render() {
    const { facts } = this.props;

    const currentFact =
      facts.nodes[Math.floor(Math.random() * facts.nodes.length)];
    return (
      <div className="fact">
        <div
          className="factText"
          dangerouslySetInnerHTML={{
            __html: currentFact.elements.description.value
          }}
        />
        {currentFact.elements.image.value[0] ? (
          <GatsbyImage
            image={currentFact.elements.image.value[0].localFile.childImageSharp.gatsbyImageData}
            alt=""
            className="factImage"
          />
        ) : null}
      </div>
    );
  }
}

export default Fact;
