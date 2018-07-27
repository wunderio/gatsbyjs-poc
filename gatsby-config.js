module.exports = {
  siteMetadata: {
    title: `GatsbyJS PoC`,
    description: `A Wunderful site built with GatsbyJS.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
