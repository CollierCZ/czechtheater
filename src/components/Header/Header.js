import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./Header.css";

const Header = ({ image, logoDescription, siteTitle }) => (
  <header>
    <Link to="/">
      <GatsbyImage image={image} alt={logoDescription ? logoDescription : ""} />
      <div className="siteName">{siteTitle}</div>
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
