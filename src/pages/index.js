import React from "react"

import Layout from "../components/layout"
import Biography from "../components/content/biography"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Biography />
  </Layout>
)

export default IndexPage
