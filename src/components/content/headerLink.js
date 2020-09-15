import React from "react"

import { Link } from "gatsby"
import { Button } from "grommet"

const HeaderLink = ({ label, to }) => {
  return (
    <Link
      style={{
        boxShadow: "none",
        textDecoration: "none",
      }}
      to={to}
    >
      <Button
        plain
        margin="small"
        color="brand"
        hoverIndicator={true}
        label={label}
      />
    </Link>
  )
}

export default HeaderLink
