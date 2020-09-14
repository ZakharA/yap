import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GitHubRepoContent from "../components/content/githubRepoContent"

const ProjectsPage = props => (
  <Layout>
    <SEO title="Projects" />
    <GitHubRepoContent projects={props.data} />
  </Layout>
)

export default ProjectsPage

export const query = graphql`
  query onGithub {
    githubData {
      data {
        user {
          repositories {
            edges {
              node {
                name
                description
                url
                isPrivate
                repositoryTopics {
                  edges {
                    node {
                      topic {
                        name
                      }
                    }
                  }
                }
                stargazers {
                  totalCount
                }
                readme {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`
