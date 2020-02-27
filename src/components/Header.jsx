import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
  a {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
`;

const Header = ({ title }) => (
  <StyledHeader>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{title}</Link>
    </h1>
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
