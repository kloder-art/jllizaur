import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 1.45rem 1.0875rem;
  max-width: 790px;
  margin: 0 auto;
`;

export const Container: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <StyledContainer>{children}</StyledContainer>;
