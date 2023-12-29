import * as React from 'react';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

import { StyledGalleryItem } from './StyledGalleryItem';

type Props = {
  image: IGatsbyImageData;
  title: string;
  technic: string;
  year: number;
  width: number;
  height: number;
  span: number[];
  onClick: () => void;
};

export const GalleryItem: React.FC<Props> = ({
  image,
  title,
  technic,
  year,
  span,
  width,
  height,
  onClick,
}) => {
  const img = getImage(image) as IGatsbyImageData;
  return (
    <StyledGalleryItem span={span} onClick={onClick}>
      <GatsbyImage image={img} alt={title} />
      <div className="meta">
        <h3>{title}</h3>
        <p>
          {width != null && height != null && `${width}x${height}. `}
          {technic}. {year}
        </p>
      </div>
    </StyledGalleryItem>
  );
};
