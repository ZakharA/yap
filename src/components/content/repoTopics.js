import React from "react"
import { Box } from "grommet"

const RepoTopics = ({ topics }) => {
  return (
    <Box direction="row-responsive" gap="xsmall">
      {topics.map(topic => (
        <Box background="brand" pad="xxsmall">
          {topic.node.topic.name}
        </Box>
      ))}
    </Box>
  )
}

export default RepoTopics
