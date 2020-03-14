import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Artwork from '../components/artwork/Artwork';

import order from '../../data/artwork/order';

const IndexPage = ({
  data: {
    allFile: { edges },
  },
}) => (
  <Layout>
    <SEO title={'Inicio'} home={true} />
    {order
      .map(x =>
        edges.find(y => y.node.childMarkdownRemark.frontmatter.id === x)
      )
      .filter(x => !!x)
      .map((x, idx) => (
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
      sort: { fields: childMarkdownRemark___frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              id
              title
              artwork {
                image {
                  sharp: childImageSharp {
                    fluid(quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
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
