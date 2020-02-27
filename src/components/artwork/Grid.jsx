import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import Item from './Item';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: row dense;
`;

const Grid = ({ items }) => (
  <StyledGrid>
    {items.map((x, idx) => (
      <Item key={idx} {...x} />
    ))}
  </StyledGrid>
);

Grid.propTypes = {
  items: PropType.array,
};

export default Grid;
