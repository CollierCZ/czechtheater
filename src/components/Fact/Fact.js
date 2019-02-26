import React, { Component } from "react";
import "./Fact.css"

  


class Fact extends Component {
  render() {
    const { facts } = this.props;
    
    const allFacts = facts.edges;
    console.log(allFacts);
    return (    

      <div className="fact" dangerouslySetInnerHTML={{ __html: allFacts[Math.floor(Math.random() * allFacts.length)].node.elements.description.resolvedHtml}} />
    )
  }
}

export default Fact;