import React from "react"

import { Card, Box, Avatar, Anchor, Text } from "grommet"
import { Linkedin, Mail, Github, Twitter } from "grommet-icons"
const ProfileContent = () => {
  return (
    <Box align="center" direction="column" pad="medium">
      <Avatar
        round="large"
        src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
        size="xlarge"
      />
      <Text>Arsentii Zakharchenko</Text>
      <Text>Master of Information Technology</Text>
      <Anchor href="#">Monash University</Anchor>
      <Box direction="row">
        <Anchor href="#" icon={<Mail />}>
          Email
        </Anchor>
        <Anchor href="#" icon={<Linkedin />}>
          LinkedIn
        </Anchor>
        <Anchor href="#" icon={<Github />}>
          Github
        </Anchor>
        <Anchor href="#" icon={<Twitter />}>
          Twitter
        </Anchor>
      </Box>
    </Box>
  )
}

export default ProfileContent
