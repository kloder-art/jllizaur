import * as React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { SEO, VirtualGallery } from '../components';

type Props = {
  data: {
    allFile: {
      edges: {
        node: {
          childMarkdownRemark: {
            frontmatter: {
              artwork: {
                height: number;
                image: IGatsbyImageData;
                technic: string;
                title: string;
                width: number;
                year: number;
              }[];
            };
          };
        };
      }[];
    };
  };
};

const TestPage: React.FC<Props> = ({
  data: {
    allFile: { edges },
  },
}) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <VirtualGallery
      artwork={edges[0].node.childMarkdownRemark.frontmatter.artwork}
      music={'/sandy-beach-calm-waves-water-nature-sounds-8052.mp3'}
      locution={'/ElevenLabs_2023-12-27T23:48:51_James_pre_s50_sb75_m1.mp3'}
    />
  );
};

export default TestPage;

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "artwork" }
        extension: { eq: "md" }
        childMarkdownRemark: {
          frontmatter: { id: { eq: "el-principio-de-arquimedes" } }
        }
      }
      sort: { childMarkdownRemark: { frontmatter: { order: ASC } } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              id
              title
              order
              artwork {
                image {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, quality: 80)
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

export const Head = () => <SEO title="🖼️ El principio de Arquímedes" />;
