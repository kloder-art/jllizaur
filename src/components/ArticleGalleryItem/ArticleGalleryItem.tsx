import * as React from 'react';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

import { StyledArticleGalleryItem } from './StyledArticleGalleryItem';

type Props = {
  title: string;
  thumb: IGatsbyImageData;
  onClick: () => void;
};

export const ArticleGalleryItem: React.FC<Props> = ({
  title,
  thumb,
  onClick,
}) => {
  const thumbImg = getImage(thumb) as IGatsbyImageData;
  return (
    <StyledArticleGalleryItem role={'button'} title={title} onClick={onClick}>
      <GatsbyImage image={thumbImg} alt={title ?? ''} />
      <p style={{ margin: 0 }}>{title}</p>
    </StyledArticleGalleryItem>
  );
};
