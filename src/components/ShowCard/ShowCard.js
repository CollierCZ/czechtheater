import React, { Component } from "react";
import Img from "gatsby-image";
import "./ShowCard.css"

class ShowCard extends Component {
  render() {
    const { name, description, imageSrc, imageDescription, slug, time, ticketLink  } = this.props;
    return (
      <div className={time + " showCard"} >
        <div className="image">
          <Img 
            fluid={imageSrc}
            alt={imageDescription}
          />
        </div>
        {ticketLink 
          ? (time === "future") && 
          <h4 className="tickets"><a href={ticketLink}>Tickets</a></h4>
          : null
        }
          <a href={slug}><h3>{name}</h3><div className="showDescription"  dangerouslySetInnerHTML={{ __html: description}} /></a>
      </div>
    )
  }
}

export default ShowCard;