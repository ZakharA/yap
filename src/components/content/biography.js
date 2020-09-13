import React from "react"

import { Grid, Box, ResponsiveContext } from "grommet"
import ProfileContent from "./profileContent"
import BioContent from "./bioContent"

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"],
}

const rows = {
  small: ["auto", "auto"],
  medium: ["auto"],
  large: ["auto"],
  xlarge: ["auto"],
}

const fixedGridAreas = {
  small: [
    { name: "profilePic", start: [0, 0], end: [0, 0] },
    { name: "bioContent", start: [0, 1], end: [0, 1] },
  ],
  medium: [
    { name: "profilePic", start: [0, 0], end: [0, 0] },
    { name: "bioContent", start: [1, 0], end: [1, 0] },
  ],
  large: [
    { name: "profilePic", start: [0, 0], end: [0, 0] },
    { name: "bioContent", start: [1, 0], end: [1, 0] },
  ],
  xlarge: [
    { name: "profilePic", start: [0, 0], end: [0, 0] },
    { name: "bioContent", start: [1, 0], end: [1, 0] },
  ],
}

const ResponsiveGrid = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size]
        }
      }

      let rowsVal = rows
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size]
        }
      }

      let areasVal = areas
      if (areas && !Array.isArray(areas)) areasVal = areas[size]

      return (
        <Grid
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      )
    }}
  </ResponsiveContext.Consumer>
)

const Biography = () => {
  return (
    <ResponsiveGrid
      rows={rows}
      columns={columns}
      gap="small"
      areas={fixedGridAreas}
      margin="medium"
      pad="large"
    >
      <Box gridArea="profilePic" background="light-5">
        <ProfileContent />
      </Box>
      <Box gridArea="bioContent" background="light-2">
        <BioContent />
      </Box>
    </ResponsiveGrid>
  )
}

export default Biography
