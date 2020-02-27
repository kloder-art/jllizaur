import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const getSpan = aspectRatio => {
  // TODO Find the proper math formula to avoid this mapping
  if (aspectRatio > 0.9) return 1;
  if (aspectRatio > 0.7) return 2;
  return 3;
};

const getColSpan = aspectRatio => {
  if (aspectRatio > 1.5) return 2;
  return 1;
};

const StyledItem = styled.div`
  grid-row-end: span ${props => getSpan(props.aspectRatio)};
  grid-column-end: span ${props => getColSpan(props.aspectRatio)};
  @media (max-width: 490px) {
    & {
      grid-column-end: span 1;
    }
  }
`;

const Item = ({ image, title }) => (
  <StyledItem aspectRatio={image.sharp.fluid.aspectRatio}>
    {console.log(image.sharp.fluid.aspectRatio)}
    <Img fluid={image.sharp.fluid} objectFit={'cover'} alt={title} />
  </StyledItem>
);

Item.propTypes = {
  image: PropType.object,
  title: PropType.string,
};

export default Item;
