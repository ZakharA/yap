import React from "react"
import { Box, Heading } from "grommet"

import CustomList from "./customList"

const CustomListWrapper = ({ gridArea, text, items }) => {
  return (
    <Box gridArea={gridArea} animation={{ type: "slideUp", duration: 2000 }}>
      <Heading level={2}>{text}: </Heading>
      <CustomList items={items} />
    </Box>
  )
}

export default CustomListWrapper
