import styled from 'styled-components';

export const StyledGallery = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: row dense;
  // align-items: center;
  // justify-content: center;
`;
