import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header/Header"
import "./layout.css"

const Layout = ({ children }) => {
  const { kontentItemBasicInfo } = useStaticQuery(graphql`
    query {
      kontentItemBasicInfo {
        ...BasicInfoFragment
      }
    }
  `)

  const favicon = kontentItemBasicInfo.elements.favicon.value[0]
  return (
    <>
      <Header 
        siteTitle={kontentItemBasicInfo.elements.name.value} 
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
