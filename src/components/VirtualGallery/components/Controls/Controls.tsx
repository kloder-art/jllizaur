import * as React from 'react';
import { Clock, Quaternion, Vector2, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';

import {
  DeviceOrientationState,
  KeyboardState,
  MouseState,
  deviceUpdateRotation,
  getOnDeviceOrientation,
  getOnKeyDown,
  getOnKeyUp,
  getOnMouseDown,
  getOnMouseMove,
  getOnMouseUp,
  getOnOrientationChange,
  keyboardUpdatePosition,
  mouseUpdateRotation,
  updatePrevPos,
} from './inputs';
import { ControlsState } from './declarations';
import { checkBoxBoundaries } from './boundaries';
import { HeadBobState, updateHeadBob } from './headBob';

export const Controls = () => {
  const { camera } = useThree();
  const clock = React.useMemo(() => new Clock(), []);

  const mouseState = React.useRef<MouseState>({
    mouseButton: false,
    pos: new Vector2(),
    prevPos: new Vector2(),
    delta: new Vector2(),
  });

  const keyboardState = React.useRef<KeyboardState>({});

  const deviceOrientationState = React.useRef<DeviceOrientationState>({
    active: false,
    orient: 0,
    alpha: 90,
    beta: 0,
    gamma: -90,
  });

  const headBobState = React.useRef<HeadBobState>({
    active: false,
    timer: 0,
  });

  const state = React.useRef<ControlsState>({
    rotation: new Quaternion(),
    translation: new Vector3(0, 170, 0),
    phi: 0,
    theta: 0,
  });

  React.useEffect(() => {
    const onMouseDown = getOnMouseDown(mouseState.current);
    const onMouseUp = getOnMouseUp(mouseState.current);
    const onMouseMove = getOnMouseMove(mouseState.current);
    const onKeyDown = getOnKeyDown(keyboardState.current);
    const onKeyUp = getOnKeyUp(keyboardState.current);
    const onOrientationChange = getOnOrientationChange(
      deviceOrientationState.current,
    );
    const onDeviceOrientation = getOnDeviceOrientation(
      deviceOrientationState.current,
    );
    onOrientationChange();
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    window.addEventListener('orientationchange', onOrientationChange);
    window.addEventListener('deviceorientation', onDeviceOrientation);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('orientationchange', onOrientationChange);
      window.removeEventListener('deviceorientation', onDeviceOrientation);
    };
  }, []);

  React.useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mouseState.current.mouseButton) {
        state.current.rotation = mouseUpdateRotation(
          mouseState.current,
          state.current,
        );
      } else if (deviceOrientationState.current.active) {
        state.current.rotation = deviceUpdateRotation(
          deviceOrientationState.current,
        );
      }

      const translation = keyboardUpdatePosition(
        keyboardState.current,
        state.current.phi,
        delta,
      );
      state.current.translation = checkBoxBoundaries(
        state.current.translation,
        keyboardUpdatePosition(keyboardState.current, state.current.phi, delta),
        450,
      );

      if (translation.x !== 0 || translation.z !== 0) {
        headBobState.current.active = true;
      }

      updateHeadBob(headBobState.current)(delta);

      camera.quaternion.copy(state.current.rotation);
      camera.position.copy(state.current.translation);
      camera.position.y += Math.sin(headBobState.current.timer * 10) * 1.5;

      const forward = new Vector3(0, 0, -1);
      forward.applyQuaternion(state.current.rotation);
      forward.multiplyScalar(100);
      forward.add(state.current.translation);
      camera.lookAt(forward);

      updatePrevPos(mouseState.current);
    };
    animate();
  }, []);

  return null;
};
