import React from "react"
import { List, Box, Text } from "grommet"

const CustomList = ({ items }) => {
  return (
    <List
      data={items}
      border={{
        color: "none",
        side: "horizontal",
        size: "small",
      }}
    >
      {(datum, index) => (
        <Box
          key={index}
          direction="row"
          gap="small"
          size="xsmall"
          align="center"
        >
          {datum.icon}
          {datum.extra ? (
            <Box direction="column">
              {datum.text}
              <Text weight="bold">
                {datum.extra.degree}, {datum.extra.year}
              </Text>
            </Box>
          ) : (
            <Text weight="bold">{datum.text}</Text>
          )}
        </Box>
      )}
    </List>
  )
}

export default CustomList
