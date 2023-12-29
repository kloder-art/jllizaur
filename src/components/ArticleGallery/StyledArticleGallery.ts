import styled from 'styled-components';

export const StyledArticleGallery = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  justify-content: center;
`;
