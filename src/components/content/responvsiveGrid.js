import React from "react"

import { Grid, ResponsiveContext } from "grommet"

const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Grid areas={areas[size]} {...props}>
      {children}
    </Grid>
  )
}

export default ResponsiveGrid
