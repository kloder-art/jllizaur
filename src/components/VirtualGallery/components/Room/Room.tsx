import * as React from 'react';
import { DoubleSide } from 'three';

import { pathScale, pathToVertices } from './path';

type RoomProps = {
  path: [number, number][];
  scale?: number;
  height?: number;
};

export const Room: React.FC<RoomProps> = ({
  path,
  scale = 1,
  height = 300,
}) => {
  const vertices = React.useMemo(() => {
    return pathToVertices(pathScale(path, scale), height);
  }, [path, scale, height]);
  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={vertices}
          count={vertices.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <meshBasicMaterial color={'#fff'} side={DoubleSide} />
    </mesh>
  );
};
