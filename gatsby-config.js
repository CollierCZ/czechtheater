module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@kontent-ai/gatsby-source`,
      options: {
        projectId: `fb599585-baec-0077-1624-981d3321fff0`,
        languageCodenames: [`en-US`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Czech Theater`,
        short_name: `Czech Theater`,
        start_url: `/`,
        background_color: `#d7141a`,
        theme_color: `#d7141a`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
