import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Item from './Item';

const StyledGrid = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  justify-content: center;
`;

const Grid = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(-1);

  const openLightbox = index => {
    setCurrentImage(index);
  };

  const closeLightbox = () => {
    setCurrentImage(-1);
  };

  console.log(items);
  return (
    <>
      <StyledGrid>
        {items.map((x, idx) => (
          <Item key={idx} onClick={() => openLightbox(idx)} {...x} />
        ))}
      </StyledGrid>
      <ModalGateway>
        {currentImage >= 0 && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={items.map(({ image: { sharp: { fluid } } }) => ({
                src: fluid.src,
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
