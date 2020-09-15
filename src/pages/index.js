import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Biography from "../components/content/biography"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Biography image={props.data.imageOne.childImageSharp.fluid} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
