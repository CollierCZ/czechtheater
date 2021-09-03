import React from "react"

import Layout from "../layout/layout"
import Seo from "../components/Seo/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
