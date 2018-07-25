# Notes

## Layout component

In general, every page should wrap itself in this component. It has three purposes (SRP purists beware). It...

1.  ...is a general layout component which renders out the Header, Footer, and page content (the latter gets passed in from the page that calls it, then passes it down to the Content component).
2.  ...injects global css. In a typical webpack setup, this might be imported in the main entry point, but that's not really a thing in Gatsby. Well, there's `gatsby-browser.js`, but that currently [has issues](https://github.com/gatsbyjs/gatsby/issues/5997)
3.  ...uses React Helmet to add any meta info in the head.

Currently, everything except this component and those that will be in `src/pages` are stateless functional components. So, they should be pretty easy to work with and test etc. But let's see how that goes as complexity grows.

"StaticQuery" info [here](https://www.gatsbycentral.com/staticquery-in-gatsby-v2)
(tl;dr: in Gatsby, _pages_ have a different/simpler way of grabbing data with GraphQL. Components that aren't pages can make GraphQL queries by wrapping themselves in a StaticQuery component provided by Gatsby, which must then pass two props: `query` and `render`).
