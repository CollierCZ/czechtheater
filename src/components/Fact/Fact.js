import React, { Component } from "react";
import "./Fact.css"

class Fact extends Component {
  render() {
    const { facts } = this.props;
    
    const currentFact = facts.edges[Math.floor(Math.random() * facts.edges.length)];
    return (    

      <div className="fact">
        <div className="factText" dangerouslySetInnerHTML={{ __html: currentFact.node.elements.description.resolvedData.html}} />
        {currentFact.node.elements.image.value[0] ? (
          <img src={currentFact.node.elements.image.value[0].url+"?w=250&h250"} alt="" className="factImage" /> ) : null
        }
      </div>
    )
  }
}

export default Fact;