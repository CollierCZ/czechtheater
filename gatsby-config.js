module.exports = {
  siteMetadata: {
    title: "Czech Theater",
    author: "Aaron Collier",
    description: "A multicultural amateur community theater presenting Czech plays in English in Brno.",
    keywords: "theater, czech, amateur, performance"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'czech-theater',
        short_name: 'czech-theater',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
