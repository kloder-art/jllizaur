import * as React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: 0px;
  }
`;

export const Section: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <StyledSection>{children}</StyledSection>;
