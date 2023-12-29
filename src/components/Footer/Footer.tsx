import * as React from 'react';

import { Container } from '../Container';
import { StyledFooter } from './StyledFooter';

type Props = {
  title: string;
};

export const Footer: React.FC<Props> = ({ title }) => (
  <StyledFooter>
    <Container>
      © {new Date().getFullYear()} {title}
    </Container>
  </StyledFooter>
);
