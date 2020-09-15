import React from "react"

import { Box, Heading, Text } from "grommet"
import { DocumentMissing } from "grommet-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box margin="large" align="center" gap="medium">
      <Heading level={1}>NOT FOUND</Heading>
      <DocumentMissing size="xlarge" color="brand" />

      <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Box>
  </Layout>
)

export default NotFoundPage
