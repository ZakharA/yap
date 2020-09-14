import PropTypes from "prop-types"
import React from "react"

import { Box, Header, Nav, Menu, Anchor, ResponsiveContext } from "grommet"

const PageHeader = ({ siteTitle }) => (
  <Header pad="medium" elevation="medium">
    <Box direction="row" align="center" gap="Medium"></Box>
    <ResponsiveContext.Consumer>
      {size =>
        size === "small" ? (
          <Menu
            margin={{ right: "medium" }}
            pad="small"
            dropProps={{ align: { top: "top", right: "right" } }}
            items={[
              {
                label: (
                  <Anchor href="/" margin="medium">
                    About Me
                  </Anchor>
                ),
                onClick: () => {},
              },
              {
                label: (
                  <Anchor href="https://fullstacksaga.com" margin="medium">
                    Blog
                  </Anchor>
                ),
                onClick: () => {},
              },
              {
                label: (
                  <Anchor href="/projects" margin="medium">
                    Projects
                  </Anchor>
                ),
                onClick: () => {},
              },
              {
                label: (
                  <Anchor
                    href="https://drive.google.com/file/d/1qYGkoPzVWWqZXd2F9YtRZmFzguWVxVBe/view?usp=sharing"
                    margin="medium"
                  >
                    Resume
                  </Anchor>
                ),
                onClick: () => {},
              },
              {
                label: <Anchor margin="medium">Contact</Anchor>,
                onClick: () => {},
              },
            ]}
          />
        ) : (
          <Nav direction="row" align="end">
            <Anchor href="/" label="About Me" />
            <Anchor
              onClick={() => {
                window.location.href = "https://fullstacksaga.com"
              }}
              label="Blog"
            />
            <Anchor href="/projects" label="Projects" />
            <Anchor
              href="https://drive.google.com/file/d/1qYGkoPzVWWqZXd2F9YtRZmFzguWVxVBe/view?usp=sharing"
              label="Resume"
            />
            <Anchor label="Contact" />
          </Nav>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
)

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: ``,
}

export default PageHeader
