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
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://dev-lastfm.pantheonsite.io/',
        apiBase: 'jsonapi',
      }
    },
    {
      resolve: 'gatsby-source-rss-fork',
      options: {
        rssURL: 'http://feeds.bbci.co.uk/news/technology/rss.xml'
      }
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        typePrefix: 'mdb__',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=5e4728d8bde363c15caa37be4c07f0f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`,
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
        name: `movies`,
        entityLevel: `results`,
        localSave: false,
        //path: `${__dirname}/src/data/auth/`,
        skipCreateNode: false,
        verboseOutput: true,
      }
    },
  ],
}
