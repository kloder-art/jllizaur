import React from 'react';
import PropType from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Artwork from '../components/artwork/Artwork';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={'Inicio'} home={true} />
    {data.allMarkdownRemark.edges.map((x, idx) => (
      <Artwork key={idx} {...x} />
    ))}
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
`;
