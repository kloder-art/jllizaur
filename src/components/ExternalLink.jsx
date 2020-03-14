import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, children, onClick }) => (
  <a
    href={href}
    target={'_blank'}
    rel={'noopener noreferrer'}
    onClick={onClick}
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default ExternalLink;
