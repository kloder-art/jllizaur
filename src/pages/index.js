import React from 'react';
import PropType from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Grid from '../components/artwork/Grid';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <Grid items={data.allMarkdownRemark.edges[0].node.frontmatter.artwork} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropType.object,
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            artwork {
              image {
                sharp: childImageSharp {
                  fluid(quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
