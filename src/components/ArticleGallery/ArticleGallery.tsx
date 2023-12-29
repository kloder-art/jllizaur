import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { StyledArticleGallery } from './StyledArticleGallery';

type Props = {
  slides: {
    src: string;
  }[];
  children: ({
    setIndex,
  }: {
    setIndex: (num: number) => void;
  }) => React.ReactNode;
};

export const ArticleGallery: React.FC<Props> = ({ children, slides }) => {
  const [index, setIndex] = React.useState(-1);
  return (
    <>
      <StyledArticleGallery>{children({ setIndex })}</StyledArticleGallery>
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};
