import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout
      pathname={post.fields.slug}
      title="Blog post"
      colourScheme="standard"
    >
      <h2>{post.frontmatter.title}</h2>
      <p>
        By <strong>{post.frontmatter.author}</strong>
      </p>
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
        author
      }
      fields {
        slug
      }
    }
  }
`
