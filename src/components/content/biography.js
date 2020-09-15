import React from "react"

import { Box } from "grommet"
import ProfileContent from "./profileContent"
import BioContent from "./bioContent"
import ResponsiveGrid from "./responvsiveGrid"

const columns = {
  small: ["auto"],
  medium: ["auto", "auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"],
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
    { name: "bioContent", start: [1, 0], end: [2, 0] },
  ],
  large: [
    { name: "profilePic", start: [0, 0], end: [0, 0] },
    { name: "bioContent", start: [1, 0], end: [2, 0] },
  ],
  xlarge: [
    { name: "profilePic", start: [0, 0], end: [0, 0] },
    { name: "bioContent", start: [1, 0], end: [2, 0] },
  ],
}

const Biography = ({ image }) => {
  return (
    <ResponsiveGrid
      rows={rows}
      columns={columns}
      areas={fixedGridAreas}
      gap="small"
      margin="medium"
      pad="large"
    >
      <Box gridArea="profilePic">
        <ProfileContent image={image} />
      </Box>
      <Box gridArea="bioContent">
        <BioContent />
      </Box>
    </ResponsiveGrid>
  )
}

export default Biography
