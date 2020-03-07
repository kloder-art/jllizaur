import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const StyledHeader = styled.header`
  margin-bottom: 0rem;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  h1 a {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
`;

const Header = ({ title }) => (
  <StyledHeader>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{title}</Link>
    </h1>
    <Menu />
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
