import * as React from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { FirstPersonCamera } from './FirstPersonCamera';

export const Controls = () => {
  const state = useThree();
  const clock = React.useMemo(() => new THREE.Clock(), []);

  const controls = React.useMemo(() => {
    const fpc = new FirstPersonCamera(state.camera);
    return fpc;
  }, []);

  React.useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(clock.getDelta());
    };
    animate();
  }, []);

  return null;
};
