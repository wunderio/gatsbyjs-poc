import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from 'templates/Layout'

class FilmPage extends Component {
  render() {
    const movie = this.props.data.mdbMovies
    return (
      <Layout title={movie.title} colourScheme="standard">
        <p>Release date: {movie.release_date}</p>
        <p>Average vote: {movie.vote_average}</p>
        <p>{movie.overview}</p>
        <p><img src={ "https://image.tmdb.org/t/p/w400/"+movie.poster_path } alt={ movie.title } /></p>
      </Layout>
    )
  }
}

export default FilmPage

export const query = graphql`
  query($id: String!) {
    mdbMovies(
      id: {
        eq: $id
      }
    ) {
      title
      vote_average
      release_date
      overview
      poster_path
    }
  }
  `
