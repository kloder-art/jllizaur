import * as React from 'react';
import {
  ClampToEdgeWrapping,
  DoubleSide,
  LinearFilter,
  SRGBColorSpace,
  TextureLoader,
} from 'three';
import { useLoader } from '@react-three/fiber';

import { getSignCanvas } from './sign';

type PaintingProps = {
  width: number;
  height: number;
  image: string;
  title: string;
  technic: string;
  position: [number, number, number];
  rotation: [number, number, number];
};

export const Painting: React.FC<PaintingProps> = ({
  width,
  height,
  image,
  title,
  technic,
  position,
  rotation,
}) => {
  const texture = useLoader(TextureLoader, image);
  texture.colorSpace = SRGBColorSpace;

  const signCanvas = React.useMemo(
    () =>
      getSignCanvas({
        size: 24,
        title,
        subtitle: `${width}x${height}: ${technic}`,
      }),
    [title, width, height, technic],
  );

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0, 0.5]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Sides */}

      {/* Up */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -height / 2, 0]}>
        <planeGeometry args={[width, 1]} />
        <meshBasicMaterial color={'#b88b5c'} side={DoubleSide} />
      </mesh>
      {/* Down */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, height / 2, 0]}>
        <planeGeometry args={[width, 1]} />
        <meshBasicMaterial color={'#b88b5c'} side={DoubleSide} />
      </mesh>
      {/* Left */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[-width / 2, 0, 0]}>
        <planeGeometry args={[1, height]} />
        <meshBasicMaterial color={'#b88b5c'} side={DoubleSide} />
      </mesh>
      {/* Right */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[width / 2, 0, 0]}>
        <planeGeometry args={[1, height]} />
        <meshBasicMaterial color={'#b88b5c'} side={DoubleSide} />
      </mesh>

      {/* Sign */}

      <mesh
        position={[
          -width / 2 + signCanvas.width / 10 / 2,
          -(height / 2) - 5 - signCanvas.height / 10 / 2,
          0,
        ]}
      >
        <planeGeometry args={[signCanvas.width / 10, signCanvas.height / 10]} />
        <meshBasicMaterial precision={'highp'}>
          <canvasTexture
            attach="map"
            args={[signCanvas]}
            minFilter={LinearFilter}
            wrapS={ClampToEdgeWrapping}
            wrapT={ClampToEdgeWrapping}
          />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
};
