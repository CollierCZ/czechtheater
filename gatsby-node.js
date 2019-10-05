const path = require(`path`);

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
    if (node.internal.type === `KenticoCloudItemShow`) {
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
        allKenticoCloudItemShow {
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
        result.data.allKenticoCloudItemShow.edges.forEach(({ node }) => {
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