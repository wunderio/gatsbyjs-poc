import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogText = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 2rem;
`

const PostTitle = styled.h1`
  font-size: 3.95rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colours.cyan};
  text-align: start;
  text-transform: uppercase;

  @media ${({ theme }) => theme.breakpoints.small} {
    font-size: 5.9rem;
  }
`
const Date = styled.div`
  color: ${({ theme }) => theme.colours.textGray};
  font-weight: 300;
`

const Content = styled.article`
  h2,
  h3 {
    margin: 4.3rem 0 2.4rem;
    line-height: 1.3;
    letter-spacing: 0.2rem;
    text-align: start;
  }

  h2 {
    font-size: 3.96rem;
  }

  h3 {
    font-size: 2.52rem;
  }

  li {
    margin: 2rem 0;
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;
  }
`

const BlogPost = props => {
  const post = props.data.markdownRemark

  return (
    <Layout colourScheme="standard">
      <BlogText>Blog</BlogText>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <Date>{post.frontmatter.date}</Date>
      {/* <AuthorInfo>
        <AuthorImage>{'todo'}</AuthorImage>
        <AuthorName>{post.author || 'A. Wunderer'}</AuthorName>
        <AuthorPosition>{post.author.position || 'Wunderer'}</AuthorPosition>
      </AuthorInfo> */}
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

BlogPost.propTypes = {
  // todo: Define the shape properly
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM YYYY")
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPost
