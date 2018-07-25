import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../normalized-styles'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>
            {props.title
              ? `${props.title} - ${data.site.siteMetadata.title}`
              : `${data.site.siteMetadata.title}`}
          </title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>
        <Header title={props.title} />
        <Content children={props.children} />
        <Footer />
      </>
    )}
  />
)
