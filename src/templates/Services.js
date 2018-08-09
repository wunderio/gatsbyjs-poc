import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from 'templates/Layout'

const Excerpt = styled.div`
  display: flex;
  padding: 3em 3em 0 3em;
  color: ${({ theme }) => theme.colours.white};
  background-color: ${({ theme }) => theme.colours.red};
`

const ExcerptCopy = styled.div`
  flex: 60%;
  font-size: 2rem;
  margin-top: 2rem;
`

const Img = styled.img`
  flex: 40%;
  height: 200px;
  width: auto;
  text-align: center;
`

const Content = styled.article`
  h2,
  h3 {
    margin: 4.3rem 0 2.4rem;
    line-height: 1.3;
    letter-spacing: 0.2rem;
    text-align: start;
    font-weight: 800;
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

  // @todo: set base font sizes somewhere else.
  p {
    font-size: 1.8rem;
    font-weight: 300;
  }
`

export default ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout title={content.frontmatter.title} colourScheme="standard">
      <Excerpt>
        <ExcerptCopy>{content.frontmatter.excerpt}</ExcerptCopy>
        <Img src={ require("../assets/" + content.frontmatter.image) } alt="" />
      </Excerpt>
      <Content dangerouslySetInnerHTML={{ __html: content.html }} />
      <Link to="/services">Back to services lander</Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        excerpt
        image
      }
    }
  }
`
