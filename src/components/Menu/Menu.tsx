import React from 'react';
import { Link } from 'gatsby';

import { StyledMenu } from './StyledMenu';

const links = [
  { url: '/', label: 'Inicio' },
  { url: '/press', label: 'Prensa' },
  { url: '/cv', label: 'CV' },
  { url: '/contact', label: 'Contacto' },
];

export const Menu: React.FC = () => (
  <StyledMenu>
    {links.map(({ url, label }) => (
      <li key={url}>
        <Link to={url}>{label}</Link>
      </li>
    ))}
  </StyledMenu>
);
