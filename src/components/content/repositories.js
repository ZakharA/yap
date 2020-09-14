import React, { useContext } from "react"

import { Box, Grid, ResponsiveContext, Heading } from "grommet"
import Repository from "./repository"

const Repositories = ({ data }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box pad="large">
      <Heading level="1">Projects</Heading>
      <Grid gap="medium" columns={{ count: "fit", size: "medium" }}>
        {data.map((repository, index) => (
          <Repository repository={repository} key={index} />
        ))}
      </Grid>
    </Box>
  )
}

export default Repositories
