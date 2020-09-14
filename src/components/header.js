import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

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
                  <Link
                    style={{
                      boxShadow: "none",
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    <Anchor margin="medium">About Me</Anchor>
                  </Link>
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
                  <Link
                    style={{
                      boxShadow: "none",
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    <Anchor margin="medium">Projects</Anchor>
                  </Link>
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
            ]}
          />
        ) : (
          <Nav direction="row" align="end">
            <Link
              style={{
                boxShadow: "none",
                textDecoration: "none",
              }}
              to="/"
            >
              <Anchor label="About Me" />
            </Link>

            <Anchor
              onClick={() => {
                window.location.href = "https://fullstacksaga.com"
              }}
              label="Blog"
            />
            <Link
              style={{
                boxShadow: "none",
                textDecoration: "none",
              }}
              to="/projects"
            >
              <Anchor label="Projects" />
            </Link>
            <Anchor
              href="https://drive.google.com/file/d/1qYGkoPzVWWqZXd2F9YtRZmFzguWVxVBe/view?usp=sharing"
              label="Resume"
            />
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
