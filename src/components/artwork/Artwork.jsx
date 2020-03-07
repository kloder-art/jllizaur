import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import Grid from './Grid';
import Container from '../Container';

const StyledArtwork = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: 0px;
  }
`;

const Artwork = ({ node }) => (
  <StyledArtwork>
    <Container>
      <h2>{node.frontmatter.title}</h2>
      {node.html && (
        <p
          dangerouslySetInnerHTML={{
            __html: node.html,
          }}
        />
      )}
      <Grid items={node.frontmatter.artwork} />
    </Container>
  </StyledArtwork>
);

Artwork.propTypes = {
  node: PropType.object,
};

export default Artwork;
