import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import theme from '../utils/styles/theme'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default class Layout extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    theme: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
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
        render={data => {
          const { title, colourScheme, children } = this.props

          return (
            <>
              <Helmet>
                <title>
                  {title
                    ? `${title} - ${data.site.siteMetadata.title}`
                    : `${data.site.siteMetadata.title}`}
                </title>
                <meta charSet="utf-8" />
                <meta
                  name="description"
                  content={data.site.siteMetadata.description}
                />
              </Helmet>
              <ThemeProvider theme={theme}>
                <>
                  <Header title={title} colourScheme={colourScheme} />
                  <Main children={children} />
                  <Footer />
                </>
              </ThemeProvider>
            </>
          )
        }}
      />
    )
  }
}
