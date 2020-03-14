import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Article from '../components/press/Article';

const PressPage = ({
  data: {
    allFile: { edges },
  },
}) => (
  <Layout>
    <SEO title={'Prensa y exposiciones'} />
    <Container>
      {edges.map((x, idx) => (
        <Article
          key={idx}
          frontmatter={x.node.childMarkdownRemark.frontmatter}
          html={x.node.childMarkdownRemark.html}
        />
      ))}
    </Container>
  </Layout>
);

PressPage.propTypes = {
  data: PropTypes.object,
};

export default PressPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "press" }, extension: { eq: "md" } }
      sort: { fields: childMarkdownRemark___frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              id
              title
              year
              gallery {
                name
                website
              }
              url
              images {
                image {
                  thumb: childImageSharp {
                    fixed(quality: 80, width: 250, height: 250, fit: INSIDE) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                  sharp: childImageSharp {
                    fluid(quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                title
              }
            }
          }
        }
      }
    }
  }
`;
