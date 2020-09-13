import React from "react"

import { Card, Box, Avatar, Anchor, Text } from "grommet"
import { Linkedin, Mail, Github, Twitter } from "grommet-icons"
const ProfileContent = () => {
  return (
    <Box align="center" direction="column" pad="medium">
      <Avatar
        margin="small"
        round="large"
        src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
        size="xlarge"
      />
      <Text size="xxlarge">Arsentii Zakharchenko</Text>
      <Text size="large" margin="xsmall">
        Full Stack Software Engineer
      </Text>
      <Box direction="row">
        <Anchor size="large" href="#" icon={<Mail size="medium" />}>
          Email
        </Anchor>
        <Anchor size="large" href="#" icon={<Linkedin size="medium" />}>
          LinkedIn
        </Anchor>
        <Anchor size="large" href="#" icon={<Github size="medium" />}>
          Github
        </Anchor>
        <Anchor size="large" href="#" icon={<Twitter size="medium" />}>
          Twitter
        </Anchor>
      </Box>
    </Box>
  )
}

export default ProfileContent
