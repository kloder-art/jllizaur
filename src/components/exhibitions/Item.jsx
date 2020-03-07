import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const StyledItem = styled.div``;

const Item = ({
  node: {
    childMarkdownRemark: { frontmatter },
  },
}) => (
  <StyledItem>
    <a href={frontmatter.url} target={'_blank'} rel={'noopener noreferrer'}>
      <Img
        fluid={frontmatter.image.childImageSharp.fluid}
        objectFit={'cover'}
        alt={frontmatter.title}
      />
    </a>
    En la galería{' '}
    <a
      href={frontmatter.gallery.website}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      {frontmatter.gallery.name}
    </a>
  </StyledItem>
);

Item.propTypes = {
  node: PropTypes.object,
};

export default Item;
