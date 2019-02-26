import React, { Component } from "react";
import "./ShowCard.css"

class ShowCard extends Component {
  render() {
    const { name, description, imageUrl, imageDescription, slug, time, ticketLink  } = this.props;
    return (
      <div className={time + " showCard"} >
        <div className="image">
          <img 
            src={imageUrl + "?w=353&h=353&fit=crop"}
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