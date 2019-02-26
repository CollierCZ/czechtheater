import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/Header/Header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        kenticoCloudItemBasicInfo {
          elements {
            name {
              value
            }
            favicon {
              assets {
                url
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header 
          siteTitle={data.kenticoCloudItemBasicInfo.elements.name.value} 
          logoUrl={data.kenticoCloudItemBasicInfo.elements.favicon.assets[0].url} 
          logoDescription={data.kenticoCloudItemBasicInfo.elements.favicon.assets[0].description}        
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
            © 2018&ndash;{new Date().getFullYear()} Czech Theater, z.s., IČO: 07245904. Theme inspired by <a href="https://html5up.net">HTML5 UP</a>. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
