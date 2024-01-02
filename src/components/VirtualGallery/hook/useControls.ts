import * as React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { FirstPersonCamera } from '../camera';

type Props = {
  camera: THREE.Camera;
  renderer: THREE.Renderer;
};

const xSpeed = 10;
const zSpeed = 10;
const yRotSpeed = Math.PI / 180;

export const useControls = ({ camera, renderer }: Props) => {
  const clock = React.useMemo(() => new THREE.Clock(), []);
  const controls = React.useMemo(() => {
    const fpc = new FirstPersonCamera(camera, renderer.domElement);
    // fpc.
    // const fpc = new FirstPersonControls(camera, renderer.domElement);
    // fpc.lookSpeed = 0.1;
    // fpc.movementSpeed = 100;
    // fpc.constrainVertical = true;
    // fpc.verticalMin = 0;
    // fpc.verticalMax = Math.PI;
    return fpc;
  }, []);

  React.useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(clock.getDelta());
    };
    animate();
  }, []);

  // return { controls };

  // React.useEffect(() => {
  //   const onDocumentKeyDown = (event: KeyboardEvent) => {
  //     var keyCode = event.code;
  //     if (keyCode == 'ArrowLeft' || keyCode === 'KeyA') {
  //       camera.translateX(-xSpeed);
  //     } else if (keyCode == 'ArrowRight' || keyCode === 'KeyD') {
  //       camera.translateX(+xSpeed);
  //     }
  //     if (keyCode == 'ArrowUp' || keyCode === 'KeyW') {
  //       camera.translateZ(-zSpeed);
  //     } else if (keyCode == 'ArrowDown' || keyCode === 'KeyS') {
  //       camera.translateZ(+zSpeed);
  //     }
  //     if (keyCode == 'Escape') {
  //       camera.position.set(0, 0, 225);
  //       camera.rotation.set(0, 0, 0);
  //     }
  //   };
  //   document.addEventListener('keydown', onDocumentKeyDown, false);
  //
  //   const onMouseMove = (event: MouseEvent) => {
  //     // const fy = event.y / window.innerHeight;
  //     // camera.rotateOnWorldAxis(
  //     //   new THREE.Vector3(1, 0, 0),
  //     //   -fy * (Math.PI / 2) + Math.PI / 4,
  //     // );
  //
  //     camera.rotateOnWorldAxis(
  //       new THREE.Vector3(0, 1, 0),
  //       -event.movementX * (Math.PI / 360),
  //     );
  //   };
  //   document.addEventListener('mousemove', onMouseMove, false);
  //
  //   return () => {
  //     document.removeEventListener('keydown', onDocumentKeyDown);
  //     document.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, []);
};
