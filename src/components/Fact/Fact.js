import React, { Component } from "react";
import Img from "gatsby-image";
import "./Fact.css";

class Fact extends Component {
  render() {
    const { facts } = this.props;

    const currentFact =
      facts.edges[Math.floor(Math.random() * facts.edges.length)];
    return (
      <div className="fact">
        <div
          className="factText"
          dangerouslySetInnerHTML={{
            __html: currentFact.node.elements.description.value
          }}
        />
        {currentFact.node.elements.image.value[0] ? (
          <Img
            fixed={currentFact.node.elements.image.value[0].fixed}
            alt=""
            className="factImage"
          />
        ) : null}
      </div>
    );
  }
}

export default Fact;
