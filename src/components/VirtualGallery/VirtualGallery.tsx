import * as React from 'react';
import * as THREE from 'three';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { useCardboard, useControls, useMusic, useFullscreen } from './hook';
import { getPainting, getWalls } from './blocks';
import { StyledVirtualGallery } from './StyledVirtualGallery';
import { HUD } from './components';
import { getGalleryMap } from './galleryMap';

let camera: THREE.Camera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

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

const wallPath = new THREE.Path();
wallPath.moveTo(-1, -1);
wallPath.lineTo(1, -1);
wallPath.lineTo(1, 1);
wallPath.lineTo(-1, 1);
wallPath.lineTo(-1, -1);

const padding = 50; // padding between pictures

export const VirtualGallery: React.FC<Props> = ({ artwork, music }) => {
  const ref = React.useRef(null);

  scene = React.useMemo(() => new THREE.Scene(), []);
  camera = React.useMemo(
    () =>
      new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      ),
    [],
  );
  camera.translateY(170);
  renderer = React.useMemo(
    () => new THREE.WebGLRenderer({ antialias: true, alpha: true }),
    [],
  );

  React.useEffect(() => {
    if (ref.current) {
      (ref.current as HTMLDivElement).appendChild(renderer.domElement);
    }
    return () => {
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
    };
  }, []);

  React.useEffect(() => {
    if (ref.current) {
      // The new walls
      // const pictureLen =
      //   artwork.reduce((prev, curr) => prev + curr.width, 0) +
      //   artwork.length * padding;
      // const wallsLen = wallPath.getLength();
      // const factor = Math.ceil(pictureLen / wallsLen);
      const scaledWallPath = new THREE.Path(
        wallPath.getPoints().map((p) => p.multiplyScalar(501)),
      );

      const material = new THREE.MeshBasicMaterial({
        color: '#eee',
        side: THREE.DoubleSide,
      });

      scene.add(getWalls(scaledWallPath, material));

      // Paintings

      const galleryMap = getGalleryMap(500);
      artwork.forEach((item) => {
        const painting = getPainting(item);
        const gm = galleryMap[item.title];
        painting.position.x = gm.position.x;
        painting.position.z = gm.position.z;
        painting.rotation.y = gm.rotation;
        scene.add(painting);
      });

      // console.log(pictureLen, wallsLen, factor, scaledWallPath.getLength());
    }
  }, []);

  useControls({ camera, renderer });
  const { cardboard, toggle: toggleCardboard } = useCardboard({
    renderer,
    scene,
    camera,
    startAsCardboard: true,
  });
  const { playing, toggle: toggleMusic } = useMusic({
    src: music,
    startPlaying: true,
  });
  const { fullscreen, toggle: toggleFullscreen } = useFullscreen();

  return (
    <StyledVirtualGallery>
      <div ref={ref} />
      <HUD
        music={playing}
        onMusicClick={toggleMusic}
        cardboard={cardboard}
        onCardboardClick={toggleCardboard}
        fullscreen={fullscreen}
        onFullscreenClick={toggleFullscreen}
      />
    </StyledVirtualGallery>
  );
};
