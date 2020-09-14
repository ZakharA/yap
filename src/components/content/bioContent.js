import React, { useContext } from "react"

import {
  Paragraph,
  Box,
  List,
  Heading,
  Text,
  ResponsiveContext,
  Grid,
} from "grommet"
import {
  Node,
  Reactjs,
  Code,
  Cloud,
  Robot,
  System,
  Validate,
  Java,
} from "grommet-icons"

const skills = [
  { icon: <Node color="brand" />, text: "Javascript" },
  { icon: <Reactjs color="brand" />, text: "React" },
  { icon: <Java color="brand" />, text: "Java" },
  { icon: <Code color="brand" />, text: "Python" },
]

const interests = [
  { icon: <Cloud color="brand" />, text: "Cloud computing" },
  { icon: <System color="brand" />, text: "Distributed systems" },
  { icon: <Code color="brand" />, text: "Hybrid App development" },
  { icon: <Robot color="brand" />, text: "Machine Learning" },
]

const education = [
  {
    icon: <Validate color="brand" />,
    text: "Monash University",
    degree: "Master of Information Technology",
    year: " 2020",
  },
  {
    icon: <Validate color="brand" />,
    text: "Yugra State University",
    degree: "Bachelor of Software Engineering",
    year: " 2015",
  },
]

const CustomList = ({ items }) => {
  return (
    <List
      data={items}
      border={{
        color: "none",
        side: "horizontal",
        size: "small",
      }}
    >
      {(datum, index) => (
        <Box
          key={index}
          direction="row"
          gap="large"
          size="xsmall"
          align="center"
          gap="small"
        >
          {datum.icon}
          <Text weight="bold">{datum.text}</Text>
        </Box>
      )}
    </List>
  )
}

const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Grid areas={areas[size]} {...props}>
      {children}
    </Grid>
  )
}

const BioContent = () => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Box
      pad="medium"
      margin={{ top: "medium" }}
      animation={{ type: "slideDown", duration: 1000 }}
    >
      <Heading level={2}>About me</Heading>

      <Paragraph size="large" fill={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Paragraph>

      <ResponsiveGrid
        columns={["auto", "auto", "auto", "auto"]}
        rows={["auto", "auto", "auto"]}
        areas={{
          small: [
            { name: "skills", start: [0, 0], end: [3, 0] },
            { name: "interests", start: [0, 1], end: [3, 1] },
            { name: "education", start: [0, 2], end: [3, 2] },
          ],
          medium: [
            { name: "skills", start: [0, 0], end: [1, 0] },
            { name: "interests", start: [2, 0], end: [3, 0] },
            { name: "education", start: [0, 1], end: [3, 1] },
          ],
          large: [
            { name: "skills", start: [0, 0], end: [1, 0] },
            { name: "interests", start: [1, 0], end: [2, 0] },
            { name: "education", start: [2, 0], end: [3, 0] },
          ],
        }}
      >
        <Box gridArea="skills" animation={{ type: "slideUp", duration: 2000 }}>
          <Heading level={2}>Skills: </Heading>
          <CustomList items={skills} />
        </Box>
        <Box
          gridArea="interests"
          animation={{ type: "slideUp", duration: 2000 }}
        >
          <Heading level={2}>Interests: </Heading>
          <CustomList items={interests} />
        </Box>
        <Box
          gridArea="education"
          animation={{ type: "slideUp", duration: 2000 }}
        >
          <Heading level={2}>Education: </Heading>
          <List
            data={education}
            border={{
              color: "none",
              side: "horizontal",
              size: "small",
            }}
          >
            {(datum, index) => (
              <Box
                key={index}
                direction="row"
                gap="large"
                size="xsmall"
                align="center"
                gap="small"
              >
                {datum.icon}
                <Box direction="column">
                  {datum.text}
                  <Text weight="bold">
                    {datum.degree}, {datum.year}
                  </Text>
                </Box>
              </Box>
            )}
          </List>
        </Box>
      </ResponsiveGrid>
    </Box>
  )
}

export default BioContent
