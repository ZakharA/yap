import React from "react"

import Repositories from "./repositories"

const GitHubRepoContent = repos => {
  console.log(repos)
  return (
    <Repositories
      data={repos.projects.githubData.data.user.repositories.edges}
    />
  )
}

export default GitHubRepoContent
