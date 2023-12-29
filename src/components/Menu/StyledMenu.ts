import styled from 'styled-components';

export const StyledMenu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  li {
    margin: 0 1rem 0 0;
    a {
      text-decoration: none;
      padding: 1rem 0;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  li:last-child {
    margin-right: 0;
  }
`;
