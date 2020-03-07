import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import Grid from './Grid';
import Container from '../Container';

const StyledArtwork = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
