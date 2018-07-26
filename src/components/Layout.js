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
    pathname: PropTypes.string.isRequired,
    title: PropTypes.string,
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
        render={data => (
          <>
            <Helmet>
              <title>
                {this.props.title
                  ? `${this.props.title} - ${data.site.siteMetadata.title}`
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
                <Header
                  title={this.props.title}
                  pathname={this.props.pathname}
                />
                <Main children={this.props.children} />
                <Footer />
              </>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}
