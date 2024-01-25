import React from 'react';
import { Link, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { TbCardboards } from 'react-icons/tb';

import { GalleryType } from '../declaration';
import {
  Layout,
  SEO,
  Container,
  Section,
  Gallery,
  GalleryItem,
} from '../components';
import { IconButton } from '../components/VirtualGallery/components';

type Props = {
  data: {
    allFile: {
      edges: {
        node: {
          childMarkdownRemark: {
            frontmatter: GalleryType;
            html: string;
          };
        };
      }[];
    };
  };
};

const IndexPage: React.FC<Props> = ({
  data: {
    allFile: { edges },
  },
}) => (
  <Layout>
    {edges
      .filter((edge) => !!edge)
      .map((edge) => {
        const section = edge.node.childMarkdownRemark;
        const artwork = section.frontmatter.artwork;
        return (
          <Section key={section.frontmatter.id}>
            <Container>
              <h2>
                {section.frontmatter.title}{' '}
                {section.frontmatter.title === 'El principio de Arquímedes' ? (
                  <span style={{ float: 'right' }}>
                    <Link to="/el-principio-de-arquimedes/">
                      <IconButton>
                        <TbCardboards size={'1.5rem'} />
                      </IconButton>
                    </Link>
                  </span>
                ) : null}
              </h2>
              {section.html && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: section.html,
                  }}
                />
              )}
              <Gallery
                slides={artwork.map((artwork) => {
                  const fullSrc = getSrc(artwork.image) as string;
                  return {
                    src: fullSrc,
                  };
                })}
              >
                {({ setIndex }) => {
                  const [spanX, spanY] = [
                    Math.max(...artwork.map((x) => x.width)) / 3,
                    Math.max(...artwork.map((x) => x.height)) / 2,
                  ];
                  return artwork.map(
                    ({ width, height, title, technic, year, image }, index) => (
                      <GalleryItem
                        key={title}
                        width={width}
                        height={height}
                        title={title}
                        technic={technic}
                        year={year}
                        image={image}
                        span={[
                          Math.round(width / spanX),
                          Math.round(height / spanY),
                        ]}
                        onClick={() => {
                          setIndex(index);
                        }}
                      />
                    ),
                  );
                }}
              </Gallery>
            </Container>
          </Section>
        );
      })}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "artwork" }, extension: { eq: "md" } }
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

export const Head = () => <SEO />;
