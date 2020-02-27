import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const Grid = ({ items }) => (
  <StyledGrid>
    {items.map((x, idx) => (
      <Item key={idx} {...x} />
    ))}
  </StyledGrid>
);

export default Grid;
