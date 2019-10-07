import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/SEO/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
