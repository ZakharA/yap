import React from "react"

import { Card, CardBody, CardFooter, Paragraph, Heading } from "grommet"
import RepoTopics from "./repoTopics"
const Repository = ({ repository, index }) => {
  return (
    <Card
      hoverIndicator={true}
      pad="medium"
      gap="small"
      elevation="small"
      key={index}
      animation={{ type: "zoomIn", duration: 2000 }}
      onClick={() => {
        window.location.href = repository.node.url
      }}
    >
      <CardBody>
        <Heading style={{ textTransform: "capitalize" }} level="2">
          {repository.node.name}
        </Heading>
        <Paragraph size="small" fill={true}>
          {repository.node.description}
        </Paragraph>
      </CardBody>
      <CardFooter>
        <RepoTopics topics={repository.node.repositoryTopics.edges} />
      </CardFooter>
    </Card>
  )
}

export default Repository
