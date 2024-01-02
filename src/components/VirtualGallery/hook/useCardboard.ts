import * as React from 'react';
import * as THREE from 'three';
import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect';

type Props = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  startAsCardboard?: boolean;
};

export const useCardboard = ({
  renderer,
  scene,
  camera,
  startAsCardboard = true,
}: Props) => {
  const [cardboard, setCardboard] = React.useState(startAsCardboard);

  const effect = React.useMemo(() => new StereoEffect(renderer), []);

  const toggle = React.useCallback(() => {
    setCardboard((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'KeyC') {
        toggle();
      }
    };
    document.addEventListener('keydown', onDocumentKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onDocumentKeyDown, false);
    };
  }, []);

  React.useEffect(() => {
    function animate() {
      requestAnimationFrame(animate);

      if (cardboard) {
        effect.setSize(window.innerWidth, window.innerHeight);
        effect.render(scene, camera);
      } else {
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
      }
    }

    animate();
  }, [cardboard]);

  return { cardboard, toggle };
};
