import React from "react"
import { Footer, Text, Anchor, Box } from "grommet"
import { FormUp } from "grommet-icons"

const LayoutFooter = () => {
  return (
    <Footer pad="medium">
      <Box direction="row" fill="horizontal" justify="center"></Box>
      <Box justify="end">
        <Anchor
          size="medium"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
          icon={<FormUp />}
        ></Anchor>
      </Box>
    </Footer>
  )
}

export default LayoutFooter
