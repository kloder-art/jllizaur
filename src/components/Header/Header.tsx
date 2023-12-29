import * as React from 'react';
import { Link } from 'gatsby';

import { Menu } from '../Menu';
import { Container } from '../Container';
import { StyledHeader } from './StyledHeader';

import img from '../../images/logo.png';

type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title = '' }) => (
  <Container>
    <StyledHeader>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={img} alt={title} />
        </Link>
      </h1>
      <Menu />
    </StyledHeader>
  </Container>
);
