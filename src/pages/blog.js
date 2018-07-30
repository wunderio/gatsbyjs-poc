import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Posts = styled.ul`
  list-style-type: none;
`

const Post = styled.li`
  border: 1px solid black;
  margin-bottom: 2rem;
  padding: 2rem;
`

const Title = styled.h3``
const Date = styled.p``
const Excerpt = styled.p``

export default ({ data }) => {
  return (
    <Layout pathname="/blog" title="Blog" colourScheme="standard">
      <Posts>
        {data.allMarkdownRemark.edges.map(({ post }) => (
          <Post key={post.id}>
            <Link to={post.fields.slug}>
              <Title>{post.frontmatter.title}</Title>
            </Link>
            <Date>{post.frontmatter.date}</Date>
            <Excerpt>{post.excerpt}</Excerpt>
          </Post>
        ))}
      </Posts>
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
            date(formatString: "DD MMMM, YYYY")
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
