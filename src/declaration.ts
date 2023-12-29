import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type ArtworkType = {
  width: number;
  height: number;
  title: string;
  technic: string;
  year: number;
  size: string;
  image: IGatsbyImageData;
};

export type GalleryType = {
  id: string;
  title: string;
  artwork: ArtworkType[];
};
