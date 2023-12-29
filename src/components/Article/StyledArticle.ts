import styled from 'styled-components';

export const StyledArticle = styled.div`
  padding: 1rem 0;
  &:first-child {
    padding: 0 0 1rem;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: 0px;
  }
  a {
    color: rgba(0, 0, 0, 0.8);
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-top: 2rem;
  }
`;
