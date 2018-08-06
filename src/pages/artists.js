import React from "react"
import { graphql } from "gatsby"
import Layout from 'templates/Layout'

const ArtistsPage = ({data}) => (
  <Layout title="Music Artists" colourScheme="standard">
    <p>Content fetched from a Drupal site.</p>
    { data.allNodeArtist.edges.map(({ node }) => (
      <div key={ node.id }>
        <h3>{ node.title }</h3>
        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
        <p><img src={ "http://dev-lastfm.pantheonsite.io/"+node.relationships.field_artist_image.uri.url } alt={ node.title } /></p>
      </div>
    ))}
  </Layout>
)

export default ArtistsPage

export const query = graphql`
  query allNodeArtist {
    allNodeArtist {
      edges {
        node {
          id
          title
          body {
            value
          }
          relationships {
            field_artist_image {
              uri {
                url
              }
            }
          }
        }
      }
    }
  }
`
