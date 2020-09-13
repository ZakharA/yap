import PropTypes from "prop-types"
import React from "react"
import { Box, Header, Nav, Menu, Anchor, ResponsiveContext } from "grommet"

const PageHeader = ({ siteTitle }) => (
  <Header pad="medium">
    <Box direction="row" align="center" gap="Medium"></Box>
    <ResponsiveContext.Consumer>
      {size =>
        size === "small" ? (
          <Menu
            items={[
              { label: "About Me", onClick: () => {} },
              { label: "Blog", onClick: () => {} },
              { label: "Projects", onClick: () => {} },
              { label: "Resume", onClick: () => {} },
              { label: "Contact", onClick: () => {} },
            ]}
          />
        ) : (
          <Nav direction="row" align="end">
            <Anchor label="About Me" />
            <Anchor label="Blog" />
            <Anchor label="Projects" />
            <Anchor label="Resume" />
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
