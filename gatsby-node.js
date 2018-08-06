const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)
const _ = require(`lodash`)
var slugify = require('slugify')

// Allow absolute imports; e.g. `import Header from 'components/Header'`
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

// Middleware to allow dynamic generation of pages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  /* All Markdown files */
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)

    /* All blog posts */
    if (fileNode.relativePath.includes('blog-posts')) {
      const slug = `/blog/${kebabCase(node.frontmatter.title)}`
      const template = `BlogPost`
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `template`,
        value: template,
      })
    }

    /* All generic pages */
    if (fileNode.relativePath.includes('pages')) {
      const slug = createFilePath({
        node,
        getNode,
        basePath: `pages`,
        trailingSlash: false,
      })
      createNodeField({
        node,
        name: `slug`,
        value: slug, // e.g. `/privacy-policy`
      })
      createNodeField({
        node,
        name: `template`,
        value: `GenericPage`,
      })
    }
  }
}

// Dynamically create pages using the properties that were added in the function above
exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                template
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug, template } = node.fields
        actions.createPage({
          path: slug,
          component: path.resolve(`./src/templates/${template}.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug,
            template,
          },
        })
      })
      resolve()
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
      {
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
            }
          }
        }
      }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const pageTemplate = path.resolve(`src/templates/Film.js`)
      _.each(result.data.allMdbMovies.edges, edge => {
        var newpath = slugify(edge.node.title, {remove: /[$*_+~.()'"!\-:@]/g, lower: true})
        createPage({
          path: `/movies/` + newpath,
          component: path.resolve(pageTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  })
}
