module.exports = {
  pathPrefix: '/jlizaur',
  siteMetadata: {
    title: 'J. L. Lizaur',
    description: 'J. L. Lizaur Artist Portfolio',
    author: 'Javier López Úbeda <jlopezcur@gmail.com>',
  },
  plugins: [
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'artwork',
        path: `${__dirname}/data/artwork/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'JLizaur',
        short_name: 'JLizaur',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#121212',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
