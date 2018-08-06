import React from "react"
import { Link, graphql } from "gatsby"
import Layout from 'templates/Layout'
var slugify = require('slugify')

const MoviesPage = ({data}) => (
  <Layout title="Movies" colourScheme="standard">
    <p>Content fetched from the MovieDB API.</p>
    { data.allMdbMovies.edges.map(({ node }) => (
      <div key={ node.title }>
        <h3>{ node.title }</h3>
        <p>{ node.vote_average }</p>
        <p>{ node.release_date }</p>
        <div dangerouslySetInnerHTML={{ __html: node.overview }} />
        <p><img src={ "https://image.tmdb.org/t/p/w200/"+node.poster_path } alt={ node.title } /></p>
        <p><Link to={"/movies/"+slugify(node.title, {remove: /[$*_+~.()'"!\-:@]/g, lower: true})}>Read more</Link></p>
      </div>
    ))}
  </Layout>
)

export default MoviesPage

export const query = graphql`
  query allMdbMovies {
    allMdbMovies(
      limit: 4
      skip: 1
      sort: {
        fields: [vote_average]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          title
          vote_average
          overview
          release_date
          poster_path
        }
      }
    }
  }
`
