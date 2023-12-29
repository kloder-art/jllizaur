import * as React from 'react';
import {
  GatsbyImage,
  IGatsbyImageData,
  getImage,
  getSrc,
} from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledItem = styled.a`
  cursor: pointer;
  text-align: center;
  img {
    border: 1px solid lightgrey;
    margin: 0;
  }
`;

type Props = {
  title: string;
  thumb: IGatsbyImageData;
  full: IGatsbyImageData;
};

export const Item: React.FC<Props> = ({ title, thumb, full }) => {
  const thumbImg = getImage(thumb) as IGatsbyImageData;
  const fullSrc = getSrc(full);
  return (
    <StyledItem
      role={'button'}
      href={fullSrc}
      title={title}
      data-src={fullSrc}
      className="gallery-item"
    >
      <GatsbyImage image={thumbImg} alt={title ?? ''} />
      <p style={{ margin: 0 }}>{title}</p>
    </StyledItem>
  );
};
