import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const getSpan = aspectRatio => {
  // TODO Find the proper math formula to avoid this mapping
  if (aspectRatio > 1.5) return 1;
  if (aspectRatio > 0.9) return 2;
  if (aspectRatio > 0.7) return 3;
  return 4;
};

const StyledItem = styled.div`
  grid-row-end: span ${props => getSpan(props.aspectRatio)};
`;

const Item = ({ image, title }) => (
  <StyledItem aspectRatio={image.childImageSharp.fluid.aspectRatio}>
    {console.log(image.childImageSharp.fluid.aspectRatio)}
    <Img fluid={image.childImageSharp.fluid} objectFit={'cover'} alt={title} />
  </StyledItem>
);

export default Item;
