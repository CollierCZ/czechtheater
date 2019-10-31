const path = require(`path`);

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
    if (node.internal.type === `KontentItemShow`) {
      createNodeField({
        node,
        name: `slug`,
        value: node.elements.url.value,
      })
    }
  }

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      graphql(`
      {
        allKontentItemShow {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
      `).then(result => {
        result.data.allKontentItemShow.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`src/templates/show.js`),
                context: {
                    slug: node.fields.slug,
                }
            })
        });
        resolve();
    });
  });
}