import React from "react"

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

import CustomList from "./customList"

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
    extra: { degree: "Master of Information Technology", year: " 2020" },
  },
  {
    icon: <Validate color="brand" />,
    text: "Yugra State University",
    extra: { degree: "Bachelor of Software Engineering", year: " 2015" },
  },
]

const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Grid areas={areas[size]} {...props}>
      {children}
    </Grid>
  )
}

const BioContent = () => {
  return (
    <Box
      pad="medium"
      margin={{ top: "medium" }}
      animation={{ type: "slideDown", duration: 1000 }}
    >
      <Heading level={2}>About me</Heading>

      <Paragraph size="large" fill={true}>
        A software engineer with a proven track record of developing and
        maintaining complex software solutions in product and service
        environments. The C#, Java, AWS based cloud development, Agile workflow,
        Docker, and Test Driven Development are some of the fields I have gained
        hands-on expertise while working on existing and past projects.
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
          <CustomList items={education} />
        </Box>
      </ResponsiveGrid>
    </Box>
  )
}

export default BioContent
