import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Artwork from '../components/artwork/Artwork';

const IndexPage = ({
  data: {
    allFile: { edges },
  },
}) => (
  <Layout>
    <SEO title={'Inicio'} home={true} />
    {edges.map((x, idx) => (
      <Artwork key={idx} {...x} />
    ))}
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "artwork" }, extension: { eq: "md" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              title
              artwork {
                image {
                  sharp: childImageSharp {
                    fluid(quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    original {
                      src
                    }
                  }
                }
                title
                year
                width
                height
                technic
              }
            }
          }
        }
      }
    }
  }
`;
