const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  pathPrefix: `/yap`,
  siteMetadata: {
    title: `Arsentii Zakharchenko`,
    description: `My portfolio`,
    author: `@ArsentiiZ`,
    siteUrl: "https://zakhara.github.io/yap/",
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/images/`, name: "images" },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
        graphQLQuery: `
        query ($author: String = "", $userFirst: Int = 0, $searchFirst: Int = 0, $q: String = "") {
          user(login: $author) {
            repositories(first: $userFirst, privacy: PUBLIC,  orderBy: {field: STARGAZERS, direction: DESC}) {
              edges {
                node {
                  name
                  description
                  url
                  isPrivate
                  repositoryTopics(first: 5) {
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
                  readme: object(expression:"master:README.md"){
                    ... on Blob{
                      text
                    }
                  }
                }
              }
            }
          }
          search(query: $q, type: ISSUE, first: $searchFirst) {
            edges {
              node {
                ... on PullRequest {
                  title
                  merged
                  url
                  state
                  repository {
                    stargazers {
                      totalCount
                    }
                    repoUrl: url
                    name
                  }
                }
              }
            }
          }
        }`,
        variables: {
          userFirst: 10,
          searchFirst: 5,
          q: "author:ZakharA",
          author: process.env.GITHUB_LOGIN,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
