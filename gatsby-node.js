const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)

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
