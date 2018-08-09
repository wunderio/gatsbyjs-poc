import React from 'react'
import { Link } from 'gatsby'
import Layout from 'templates/Layout'
import WeAreHiring from "../components/WeAreHiring";

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Layout title="Homepage" colourScheme="standard" section="home">
        <Link to="/blog">Link to blog</Link>
        <br />
        <Link to="/services">Link to services</Link>
        <br />
        <Link to="/privacy-policy">Link to privacy policy</Link>
        <br />
        <Link to="/copyright">Link to copyright</Link>
        <br />
        <Link to="/terms-of-use">Link to terms of use</Link>
        <br />
        <a href="https://next.gatsbyjs.org/docs/">Link to Gatsby v2 docs</a>
        <WeAreHiring />
      </Layout>
    )
  }
}
