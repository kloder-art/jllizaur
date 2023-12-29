import * as React from 'react';

type Props = {
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const ExternalLink: React.FC<Props> = ({ href, children, onClick }) => (
  <a
    href={href}
    target={'_blank'}
    rel={'noopener noreferrer'}
    onClick={onClick}
  >
    {children}
  </a>
);
