import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from 'templates/Layout'

const Intro = styled.div`
  display: flex;
  padding: 3em 3em 0 3em;
  color: ${({ theme }) => theme.colours.white};
  background-color: ${({ theme }) => theme.colours.red};
`

const IntroCopy = styled.div`
  flex: 60%;
  font-size: 2rem;
`

const IntroCopy1 = styled.p`
  font-size: 1.25em;
  margin-top: 0;
`

const IntroCopy2 = styled.p`
  font-size: 0.85em;
  margin-bottom: 2em;
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

  // @todo: set base font sizes somewhere else.
  p {
    font-size: 1.8rem;
    font-weight: 300;
  }
`

export default ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout title={content.frontmatter.title} introText={content.frontmatter.subtitle} colourScheme="standard" section="services">
      <Intro>
        <IntroCopy>
          <IntroCopy1>{content.frontmatter.intro_1}</IntroCopy1>
          <IntroCopy2>{content.frontmatter.intro_2}</IntroCopy2>
        </IntroCopy>
        <Img src={ require("../assets/" + content.frontmatter.image) } alt="" />
      </Intro>
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
        subtitle
        excerpt
        image
        intro_1
        intro_2
      }
    }
  }
`
