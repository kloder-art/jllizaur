import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 1rem 0;
`;

const Footer = ({ title }) => (
  <StyledFooter>
    <Container>
      © {new Date().getFullYear()} {title}
    </Container>
  </StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
