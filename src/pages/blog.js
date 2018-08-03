import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from 'templates/Layout'
import BlogListItem from 'components/BlogListItem'

const BlogList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export default ({ data }) => {
  return (
    <Layout title="Blog" colourScheme="standard">
      <BlogList>
        {data.allMarkdownRemark.edges.map(({ post }) => (
          <BlogListItem key={post.id} post={post} />
        ))}
      </BlogList>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog-posts)/" } }
    ) {
      totalCount
      edges {
        post: node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            author
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
