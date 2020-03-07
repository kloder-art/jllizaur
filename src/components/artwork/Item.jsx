import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

const StyledItem = styled.div`
  grid-row-end: span ${({ span }) => span[1]};
  grid-column-end: span ${({ span }) => span[0]};
  @media (max-width: 726px) {
    & {
      grid-column-end: span ${({ span }) => (span[0] > 2 ? 2 : span[0])};
    }
  }
  @media (max-width: 490px) {
    & {
      grid-column-end: span 1;
    }
  }
`;

const StyledMeta = styled.div`
  margin: 0.7rem auto 0;
  width: fit-content;
  h3 {
    font-size: 12px;
    margin: 0;
  }
  p {
    font-size: 12px;
  }
`;

const Item = ({
  image,
  title,
  technic,
  year,
  span,
  width,
  height,
  onClick,
}) => (
  <StyledItem ratio={image.sharp.fluid.aspectRatio} span={span}>
    <a href={'javascript: void(0);'} onClick={onClick}>
      <Img fluid={image.sharp.fluid} objectFit={'cover'} alt={title} />
    </a>
    <StyledMeta>
      <h3>{title}</h3>
      <p>
        {`${width}x${height}`}. {technic}. {year}
      </p>
    </StyledMeta>
  </StyledItem>
);

Item.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  technic: PropTypes.string,
  year: PropTypes.number,
  size: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  span: PropTypes.array,
};

export default Item;
