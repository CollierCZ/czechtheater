import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { ImageElement } from "@kontent-ai/gatsby-components";
import "./Header.css";

const Header = ({ image, siteTitle }) => (
  <header>
    <Link to="/">
      <ImageElement
        image={image}
        alt={image.description || ""}
        layout="fixed"
        height={100}
        width={100}
      />
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
