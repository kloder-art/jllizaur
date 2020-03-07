import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Item from './Item';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  // align-items: center;
  // justify-content: center;
`;

const Grid = ({ items }) => {
  return (
    <StyledGrid>
      {console.log(items)}
      {items.map((x, idx) => (
        <Item key={idx} {...x} />
      ))}
    </StyledGrid>
  );
};

Grid.propTypes = {
  items: PropTypes.array,
};

export default Grid;
