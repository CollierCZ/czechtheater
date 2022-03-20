import React, { Component } from "react";
import { ImageElement } from "@kentico/gatsby-kontent-components";
import TicketLink from "../TicketLink/TicketLink";
import "./ShowCard.css";

class ShowCard extends Component {
  render() {
    const {
      name,
      description,
      showImage,
      slug,
      time,
      ticketLink,
    } = this.props;
    return (
      <div className="showCard" data-testid="show-card">
        <div className="image">
          <ImageElement image={showImage} alt={showImage.description} layout="fixed" width={291} height={291} />
        </div>
        {ticketLink ? time === "future" && <TicketLink link={ticketLink} /> : null}
        <a href={slug}>
          <h3>{name}</h3>
          <div
            className="showDescription"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </a>
      </div>
    );
  }
}

export default ShowCard;
