import PropTypes from "prop-types"
import React from "react"

import HeaderLink from "./content/headerLink"

import { Box, Header, Nav, Menu, ResponsiveContext } from "grommet"

const links = [
  <HeaderLink to="/" label="About Me" />,
  <HeaderLink to="https://fullstacksaga.com" label="Blog" />,
  <HeaderLink to="/projects" label="Projects" />,
  <HeaderLink
    to="https://drive.google.com/file/d/1qYGkoPzVWWqZXd2F9YtRZmFzguWVxVBe/view?usp=sharing"
    label="Resume"
  />,
]

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
            items={Array.from(links, item => ({
              label: item,
              onClick: () => {},
            }))}
          />
        ) : (
          <Nav direction="row" align="end">
            {links}
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
