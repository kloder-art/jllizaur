import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const getColSpan = (r, min) => (r >= 1 ? Math.min(Math.round(r), min) : 1);
const getRowSpan = (r, min) => (r < 1 ? Math.min(Math.round(1 / r), min) : 1);

const StyledItem = styled.div`
  grid-row-end: span ${({ ratio }) => getRowSpan(ratio, Infinity)};
  grid-column-end: span ${({ ratio }) => getColSpan(ratio, Infinity)};
  @media (max-width: 726px) {
    & {
      grid-column-end: span ${({ ratio }) => getColSpan(ratio, 2)};
    }
  }
  @media (max-width: 490px) {
    & {
      grid-column-end: span 1;
    }
  }
`;

const Item = ({ image, title }) => (
  <StyledItem ratio={image.sharp.fluid.aspectRatio}>
    {console.log(image.sharp.fluid.aspectRatio)}
    <Img fluid={image.sharp.fluid} objectFit={'cover'} alt={title} />
  </StyledItem>
);

Item.propTypes = {
  image: PropType.object,
  title: PropType.string,
};

export default Item;
