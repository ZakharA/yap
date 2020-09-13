import React from "react"

import Img from "gatsby-image"

import { Box, Anchor, Text } from "grommet"
import { Linkedin, Mail, Github, Twitter } from "grommet-icons"

const ProfileContent = ({ image }) => {
  return (
    <Box align="center" direction="column" pad="medium">
      <Box
        height="small"
        width="small"
        margin={{ vertical: "small" }}
        round="full"
      >
        <Img fluid={image} alt="" />
      </Box>
      <Text size="xxlarge">Arsentii Zakharchenko</Text>
      <Text size="large" margin="xsmall">
        Software Engineer
      </Text>
      <Box direction="row">
        <Anchor href="#" icon={<Mail size="medium" />}>
          Email
        </Anchor>
        <Anchor href="#" icon={<Linkedin size="medium" />}>
          LinkedIn
        </Anchor>
        <Anchor href="#" icon={<Github size="medium" />}>
          Github
        </Anchor>
        <Anchor href="#" icon={<Twitter size="medium" />}>
          Twitter
        </Anchor>
      </Box>
    </Box>
  )
}

export default ProfileContent
