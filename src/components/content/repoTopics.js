import React from "react"
import { Box } from "grommet"

const RepoTopics = ({ topics }) => {
  return (
    <Box direction="row" gap="xsmall">
      {topics.map(topic => (
        <Box background="brand" pad="xsmall" round="medium">
          {topic.node.topic.name}
        </Box>
      ))}
    </Box>
  )
}

export default RepoTopics
