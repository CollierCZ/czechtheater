import React, { Component } from "react";
import { ImageElement } from "@kentico/gatsby-kontent-components";
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
      <div className={time + " showCard"}>
        <div className="image">
          <ImageElement image={showImage} alt={showImage.description} layout="fixed" width={291} height={291} />
        </div>
        {ticketLink
          ? time === "future" && (
              <h4 className="tickets">
                <a href={ticketLink}>Tickets</a>
              </h4>
            )
          : null}
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
