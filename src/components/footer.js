import React from "react"
import { Footer, Text, Button } from "grommet"
import { FormUp } from "grommet-icons"

const LayoutFooter = () => {
  return (
    <Footer justify="center" pad="medium">
      <Text> Arsentii Zakharchenko</Text>
      <Button plain icon={<FormUp />}></Button>
    </Footer>
  )
}

export default LayoutFooter
