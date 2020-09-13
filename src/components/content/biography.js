import React from "react"

import { Grid, Box, ResponsiveContext } from "grommet"
import ProfileContent from "./profileContent"
const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"],
}

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row
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

      // Also if areas is a simple array not an object of arrays for
      // different sizes
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
        text
      </Box>
    </ResponsiveGrid>
  )
}

export default Biography
