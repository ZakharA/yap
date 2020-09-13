import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GitHubRepoContent from "../components/content/githubRepoContent"

const ProjectsPage = props => (
  <Layout>
    <SEO title="Projects" />
    <GitHubRepoContent projects={[]} />
  </Layout>
)

export default ProjectsPage
