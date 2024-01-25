import * as React from 'react';
import { IGatsbyImageData, getSrc } from 'gatsby-plugin-image';

import { StyledVirtualGallery } from './StyledVirtualGallery';
import {
  Cardboard,
  CardboardButton,
  Controls,
  FullScreenButton,
  HUD,
  MusicButton,
  Painting,
  Room,
} from './components';
import { getGalleryMap } from './galleryMap';
import { Canvas } from '@react-three/fiber';
import { GalleryOptionsContextProvider } from './context';

type Props = {
  artwork: {
    height: number;
    image: IGatsbyImageData;
    technic: string;
    title: string;
    width: number;
    year: number;
  }[];
  music: string;
  locution: string;
};

export const VirtualGallery: React.FC<Props> = ({ artwork, music }) => {
  const galleryMap = getGalleryMap(500);
  return (
    <GalleryOptionsContextProvider>
      <StyledVirtualGallery>
        <Canvas
          camera={{
            fov: 75,
            aspect:
              typeof window !== 'undefined'
                ? window.innerWidth / window.innerHeight
                : 1,
          }}
        >
          <Room
            scale={501}
            path={[
              [-1, -1],
              [1, -1],
              [1, 1],
              [-1, 1],
              [-1, -1],
            ]}
          />
          {artwork.map((item) => {
            const gm = galleryMap[item.title];
            return (
              <Painting
                key={item.title}
                title={item.title}
                width={item.width}
                height={item.height}
                image={getSrc(item.image) as string}
                technic={item.technic}
                position={[gm.position.x, 170, gm.position.z]}
                rotation={[0, gm.rotation, 0]}
              />
            );
          })}
          <Controls />
          <Cardboard />
        </Canvas>
        <HUD>
          <MusicButton src={music} />
          <CardboardButton />
          <FullScreenButton />
        </HUD>
      </StyledVirtualGallery>
    </GalleryOptionsContextProvider>
  );
};
