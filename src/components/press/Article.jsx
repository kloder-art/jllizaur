import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ExternalLink from '../ExternalLink';
import Grid from './Grid';

const StyledArticle = styled.div`
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

const Article = ({ frontmatter, html }) => (
  <StyledArticle>
    {frontmatter.url ? (
      <ExternalLink href={frontmatter.url}>
        <h2>{frontmatter.title}</h2>
      </ExternalLink>
    ) : (
      <h2>{frontmatter.title}</h2>
    )}
    {frontmatter.gallery && (
      <>
        Galería:{' '}
        {frontmatter.gallery.website ? (
          <ExternalLink href={frontmatter.gallery.website}>
            {frontmatter.gallery.name}
          </ExternalLink>
        ) : (
          <>{frontmatter.gallery.name}</>
        )}
      </>
    )}
    {html && <p dangerouslySetInnerHTML={{ __html: html }} />}
    <Grid items={frontmatter.images} />
  </StyledArticle>
);

Article.propTypes = {
  frontmatter: PropTypes.object,
  html: PropTypes.string,
};

export default Article;
