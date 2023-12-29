import * as React from 'react';
import styled from 'styled-components';
import LightGallery from 'lightgallery/react';
import { type IGatsbyImageData } from 'gatsby-plugin-image';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgZoom from 'lightgallery/plugins/zoom';

import { Item } from './Item';

const StyledGrid = styled.div`
  .gallery {
    margin: 2rem 0;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    align-items: center;
    justify-content: center;
  }
`;

type Props = {
  items: {
    title: string;
    thumb: IGatsbyImageData;
    full: IGatsbyImageData;
  }[];
};

export const Grid: React.FC<Props> = ({ items }) => (
  <StyledGrid className="gallery">
    <LightGallery
      plugins={[lgZoom]}
      download={false}
      elementClassNames="gallery"
    >
      {items.map((image, idx) => {
        return <Item key={idx} {...image} />;
      })}
    </LightGallery>
  </StyledGrid>
);
