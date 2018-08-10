module.exports = {
  siteMetadata: {
    title: `GatsbyJS PoC`,
    description: `A Wunderful site built with GatsbyJS.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-openweathermap",
      options: {
        appid: "bea227324c9356d4798648b55de46127",
        q: "London,uk",
      },
    },
  ],
}
