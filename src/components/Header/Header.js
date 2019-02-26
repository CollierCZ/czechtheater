import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

const Header = ({ siteTitle, logoUrl, logoDescription }) => (
  <header>
    <Link to="/">
      <img 
        src={logoUrl}
        alt={logoDescription}
      />
      <div className="siteName">
        {siteTitle}
      </div>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
