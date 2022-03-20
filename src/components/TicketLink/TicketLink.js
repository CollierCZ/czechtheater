import React from "react";
import PropTypes from "prop-types";

import "./TicketLink.css";

const TicketLink = ({link}) => (
  <h4 className="tickets" data-testid="ticket-link">
    <a href={link}>Tickets</a>
  </h4>
)

TicketLink.propTypes = {
  link: PropTypes.string.isRequired
};

export default TicketLink