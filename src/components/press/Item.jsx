import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';

const StyledItem = styled.a`
  cursor: pointer;
  text-align: center;
  img {
    border: 1px solid lightgrey;
    margin: 0;
  }
`;

const Item = ({ image, title, onClick }) => (
  <StyledItem role={'button'} onClick={onClick}>
    <Img fixed={image.thumb.fixed} alt={title} />
    <p style={{ margin: 0 }}>{title}</p>
  </StyledItem>
);

Item.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Item;
