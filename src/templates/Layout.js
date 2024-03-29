import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import theme from 'utils/theme'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'

export default class Layout extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    introText: PropTypes.string,
    theme: PropTypes.string,
    children: PropTypes.node.isRequired,
    section: PropTypes.string,
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
          const { title, introText, colourScheme, children, section } = this.props

          return (
            <>
              <Helmet bodyAttributes={{ class: 'section-' + section }}>
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
                  <Header section={section} title={title} introText={introText} colourScheme={colourScheme} />
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
