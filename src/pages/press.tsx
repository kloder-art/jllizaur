import * as React from 'react';
import { graphql } from 'gatsby';
import { getSrc, type IGatsbyImageData } from 'gatsby-plugin-image';

import {
  Layout,
  Container,
  SEO,
  Article,
  ArticleGallery,
  ArticleGalleryItem,
} from '../components';

type Props = {
  data: {
    allFile: {
      edges: {
        node: {
          childMarkdownRemark: {
            frontmatter: {
              url: string;
              title: string;
              gallery: {
                website: string;
                name: string;
              };
              images: {
                title: string;
                thumb: IGatsbyImageData;
                full: IGatsbyImageData;
              }[];
            };
            html: string;
          };
        };
      }[];
    };
  };
};

const PressPage: React.FC<Props> = ({
  data: {
    allFile: { edges },
  },
}) => (
  <Layout>
    <Container>
      {edges.map((edge, idx) => {
        const section = edge.node.childMarkdownRemark;
        const images = section.frontmatter.images;
        return (
          <Article
            key={idx}
            frontmatter={section.frontmatter}
            html={section.html}
          >
            <ArticleGallery
              slides={images.map((image) => {
                const fullSrc = getSrc(image.full) as string;
                return {
                  src: fullSrc,
                  alt: image.title,
                };
              })}
            >
              {({ setIndex }) => {
                return images.map((image, index) => (
                  <ArticleGalleryItem
                    title={image.title}
                    thumb={image.thumb}
                    onClick={() => {
                      setIndex(index);
                    }}
                  />
                ));
              }}
            </ArticleGallery>
          </Article>
        );
      })}
    </Container>
  </Layout>
);

export default PressPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "press" }, extension: { eq: "md" } }
      sort: { childMarkdownRemark: { frontmatter: { year: DESC } } }
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
                thumb: image {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FIXED
                      quality: 80
                      width: 250
                      height: 250
                    )
                  }
                }
                full: image {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, quality: 80)
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

export const Head = () => <SEO title="Prensa y exposiciones" />;
