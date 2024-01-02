import * as React from 'react';
import * as THREE from 'three';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { useCardboard, useControls, useMusic, useFullscreen } from './hook';
import { getPainting, getWall } from './blocks';
import { StyledVirtualGallery } from './StyledVirtualGallery';
import { HUD } from './components';

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
      for (const item of artwork) {
        const group = getPainting(item);
        scene.add(group);
      }
      const wall = getWall();
      scene.add(wall);

      // camera.position.z = 125;
      // camera.position.x = -150;
      // camera.rotation.y = -Math.PI / 6;
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
