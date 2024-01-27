import { Euler, MathUtils, Quaternion, Vector3 } from 'three';

export type DeviceOrientationState = {
  active: boolean;
  orient: number;
  alpha: number;
  beta: number;
  gamma: number;
};

const Q1 = new Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis
const VZ = new Vector3(0, 0, 1); // Unit vector on z

export const getOnOrientationChange = (state: DeviceOrientationState) => () => {
  state.active = true;
  state.orient = window.screen.orientation.angle || 0;
};

export const getOnDeviceOrientation =
  (state: DeviceOrientationState) => (event: DeviceOrientationEvent) => {
    state.active = true;
    state.alpha = event.alpha as number;
    state.beta = event.beta as number;
    state.gamma = event.gamma as number;
  };

/**
 * Return the quaternion to apply on the rotation base on the device
 * orientation
 */
export const deviceUpdateRotation = (state: DeviceOrientationState) => {
  const alpha = MathUtils.degToRad(state.alpha);
  const beta = MathUtils.degToRad(state.beta);
  const gamma = MathUtils.degToRad(state.gamma);
  const euler = new Euler(beta, alpha, -gamma, 'YXZ');
  const quaternion = new Quaternion().setFromEuler(euler);
  quaternion.multiply(Q1);
  quaternion.multiply(new Quaternion().setFromAxisAngle(VZ, -state.orient));
  return quaternion;
};
