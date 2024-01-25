import * as React from 'react';
import { useThree } from '@react-three/fiber';
import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect';

import { GalleryOptionsContext } from '../../context';

export const Cardboard: React.FC = () => {
  const { cardboard } = React.useContext(GalleryOptionsContext);
  const state = useThree();
  const renderer = state.gl;
  const effect = React.useMemo(() => new StereoEffect(renderer), [renderer]);

  React.useEffect(() => {
    function animate() {
      requestAnimationFrame(animate);

      if (renderer) {
        if (cardboard) {
          effect.setSize(window.innerWidth, window.innerHeight);
          effect.render(state.scene, state.camera);
        } else {
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.render(state.scene, state.camera);
        }
      }
    }

    animate();
  }, [cardboard]);

  return null;
};
