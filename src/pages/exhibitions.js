import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Grid from '../components/exhibitions/Grid';

const ExhibitionsPage = ({
  data: {
    allFile: { edges },
  },
}) => (
  <Layout>
    <SEO title={'Exposiciones'} />
    <Container>
      <Grid items={edges} />
    </Container>
  </Layout>
);

ExhibitionsPage.propTypes = {
  data: PropTypes.object,
};

export default ExhibitionsPage;

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "exhibition" }
        extension: { eq: "md" }
      }
      sort: { fields: childMarkdownRemark___frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              title
              year
              gallery {
                name
                website
              }
              url
              image {
                childImageSharp {
                  fluid {
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
