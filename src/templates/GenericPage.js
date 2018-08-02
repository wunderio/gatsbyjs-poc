import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout title={post.frontmatter.title} colourScheme="standard">
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
