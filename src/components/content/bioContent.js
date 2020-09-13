import React from "react"

import { Paragraph, Box, List, Heading } from "grommet"

const skills = ["Javascript", "React", "Django"]

const interests = [
  "Cloud computing",
  "Distributed systems",
  "Hybrid App development",
  "Machine Learning",
]

const BioContent = () => {
  return (
    <Box>
      <Heading>About me</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Paragraph>
      <Box direction="row" pad="small">
        <List data={skills} />
        <List data={interests} />
      </Box>
    </Box>
  )
}

export default BioContent
