import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/Header/Header"
import "./layout.css"

export const PureLayout = ({ children,data }) => {
  const favicon = data.kontentItemBasicInfo.elements.favicon.value[0]
  return (
    <>
      <Header 
        siteTitle={data.kontentItemBasicInfo.elements.name.value} 
        image={favicon}        
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © 2018&ndash;{new Date().getFullYear()} Czech Theater, z.s., IČO: 07245904. Theme inspired by <a href="https://html5up.net">HTML5 UP</a>. Powered by <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://kontent.ai">Kentico Kontent</a>.
        </footer>
      </div>
    </>
  )
}

PureLayout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        kontentItemBasicInfo {
          ...BasicInfoFragment
        }
      }
    `}
    render={data => {
      return (
        <PureLayout children={children} data={data} />
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
