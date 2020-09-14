import React from "react"

import { Card, CardBody, CardFooter, Paragraph, Heading } from "grommet"
import RepoTopics from "./repoTopics"
const Repository = ({ repository, index }) => {
  return (
    <Card pad="medium" gap="small" key={index}>
      <CardBody>
        <Heading level="3">{repository.node.name}</Heading>
        <Paragraph size="small" fill={true}>
          {repository.node.description}
        </Paragraph>
        <RepoTopics topics={repository.node.repositoryTopics.edges} />
      </CardBody>
    </Card>
  )
}

export default Repository
