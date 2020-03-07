import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Item from './Item';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: row dense;
  // align-items: center;
  // justify-content: center;
`;

const Grid = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(-1);

  const openLightbox = index => {
    setCurrentImage(index);
  };

  const closeLightbox = () => {
    setCurrentImage(-1);
  };

  const [spanX, spanY] = [
    Math.max(...items.map(x => parseFloat(x.width))) / 3,
    Math.max(...items.map(x => parseFloat(x.height))) / 2,
  ];

  return (
    <>
      <StyledGrid>
        {items.map((x, idx) => (
          <Item
            key={idx}
            {...x}
            span={[Math.round(x.width / spanX), Math.round(x.height / spanY)]}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </StyledGrid>
      <ModalGateway>
        {currentImage >= 0 && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={items.map(({ image: { sharp: { original } } }) => ({
                src: original.src,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </>
  );
};

Grid.propTypes = {
  items: PropTypes.array,
};

export default Grid;
