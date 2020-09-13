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
              { label: "Experience", onClick: () => {} },
              { label: "Blog", onClick: () => {} },
              { label: "Projects", onClick: () => {} },
              { label: "CV", onClick: () => {} },
              { label: "Contact", onClick: () => {} },
            ]}
          />
        ) : (
          <Nav direction="row" align="end">
            <Anchor label="About Me" />
            <Anchor label="Experience" />
            <Anchor label="Blog" />
            <Anchor label="Projects" />
            <Anchor label="CV" />
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
