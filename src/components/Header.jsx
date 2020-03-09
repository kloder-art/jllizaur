import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Container from './Container';

import img from '../images/logo.png';

const StyledHeader = styled.header`
  margin-bottom: 0rem;
  padding: 1.45rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  h1 a {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    img {
      margin: 0;
    }
  }
`;

const Header = ({ title }) => (
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

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
