import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from 'templates/Layout'

const NewsPage = ({data}) => (
  <Layout title="RSS News" colourScheme="standard">
    <p>Content fetched from a BBC RSS feed.</p>
    { data.allRssFeedItem.edges.map(({ node }) => (
      <div key={ node.guid }>
        <h3><Link to={ node.link }>{ node.title }</Link></h3>
        <p dangerouslySetInnerHTML={{ __html: node.pubDate }} />
        <p dangerouslySetInnerHTML={{ __html: node.content }} />
      </div>
    ))}
  </Layout>
)

export default NewsPage

export const query = graphql`
  query { allRssFeedItem(limit: 4)
    {
      edges {
        node {
          title
          link
          guid
          content
          pubDate
        }
      }
    }
  }
`
