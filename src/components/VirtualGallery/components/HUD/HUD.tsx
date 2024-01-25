import * as React from 'react';
import { IconContext } from 'react-icons';

import { StyledHUD } from './StyledHUD';

type Props = {
  children: React.ReactNode;
};

export const HUD: React.FC<Props> = ({ children }) => {
  return (
    <IconContext.Provider value={{ size: '1.5rem' }}>
      <StyledHUD>{children}</StyledHUD>
    </IconContext.Provider>
  );
};
