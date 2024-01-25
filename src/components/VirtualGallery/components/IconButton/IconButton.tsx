import * as React from 'react';

import { StyledIconButton } from './StyledIconButton';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const IconButton: React.FC<Props> = ({ onClick, children }) => (
  <StyledIconButton onClick={onClick}>{children}</StyledIconButton>
);
