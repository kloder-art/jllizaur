import * as React from 'react';

import { ExternalLink } from '../ExternalLink';
import { StyledArticle } from './StyledArticle';

type Props = {
  frontmatter: {
    url: string;
    title: string;
    gallery: {
      website: string;
      name: string;
    };
  };
  html: string;
  children: React.ReactNode;
};

export const Article: React.FC<Props> = ({ frontmatter, html, children }) => (
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
    {children}
  </StyledArticle>
);
