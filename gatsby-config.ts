import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Javier López Lizaur',
    description: 'Javier López Lizaur Artist Portfolio',
    author: 'Javier López Úbeda <jlopezcur@gmail.com>',
    siteUrl: 'https://jllizaur.art',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato']
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'artwork',
        path: `${__dirname}/data/artwork/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'press',
        path: `${__dirname}/data/press/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'J. L. Lizaur',
        short_name: 'J.L.Lizaur',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#121212',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
  ],
};

export default config;
