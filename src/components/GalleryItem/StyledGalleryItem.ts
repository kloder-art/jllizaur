import styled from 'styled-components';

export const StyledGalleryItem = styled.div<{ span: number[] }>`
  cursor: pointer;
  grid-row-end: span ${({ span }) => span[1]};
  grid-column-end: span ${({ span }) => span[0]};
  @media (max-width: 726px) {
    & {
      grid-column-end: span ${({ span }) => (span[0] > 2 ? 2 : span[0])};
    }
  }
  @media (max-width: 490px) {
    & {
      grid-column-end: span 1;
    }
  }
  a {
    cursor: pointer;
  }

  .meta {
    margin: 0.7rem auto 0;
    width: fit-content;
    h3 {
      font-size: 12px;
      margin: 0;
    }
    p {
      font-size: 12px;
    }
  }
`;
