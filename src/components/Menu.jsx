import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  li {
    margin-right: 1rem;
  }
`;

const Menu = () => (
  <StyledMenu>
    <li>
      <Link to={'/exhibitions'}>Exposiciones</Link>
    </li>
    <li>
      <Link to={'/contact'}>Contacto</Link>
    </li>
  </StyledMenu>
);

export default Menu;
