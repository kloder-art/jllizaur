import { Quaternion, Vector2, Vector3 } from 'three';
import { ControlsState } from '../declarations';

export type MouseState = {
  mouseButton: boolean;
  pos: Vector2;
  prevPos: Vector2;
  delta: Vector2;
};

const PHI_SPEED = 8;
const THETA_SPEED = 5;

const clamp = (x: number, a: number, b: number) => Math.min(Math.max(x, a), b);

export const getOnMouseDown = (state: MouseState) => (event: MouseEvent) => {
  state.mouseButton = (event as MouseEvent).button === 0;
};

export const getOnMouseUp = (state: MouseState) => () => {
  state.mouseButton = false;
};

export const getOnMouseMove = (state: MouseState) => (event: MouseEvent) => {
  state.pos = new Vector2(
    event.pageX - window.innerWidth / 2,
    event.pageY - window.innerHeight / 2,
  );

  state.delta.subVectors(state.pos, state.prevPos);
};

export const updatePrevPos = (state: MouseState) => {
  state.prevPos.copy(state.pos);
  state.delta = new Vector2();
};

/**
 * Return the quaternion to apply on the rotation base on the mouse movements
 */
export const mouseUpdateRotation = (
  state: MouseState,
  controls: ControlsState,
) => {
  const xh = state.delta.x / window.innerWidth;
  const yh = state.delta.y / window.innerHeight;

  controls.phi += -xh * PHI_SPEED;
  controls.theta = clamp(
    controls.theta + -yh * THETA_SPEED,
    -Math.PI / 3,
    Math.PI / 3,
  );

  const qy = new Quaternion().setFromAxisAngle(
    new Vector3(0, 1, 0),
    controls.phi,
  );
  const qx = new Quaternion().setFromAxisAngle(
    new Vector3(1, 0, 0),
    controls.theta,
  );

  const quaternion = new Quaternion().multiply(qy).multiply(qx);

  return quaternion;
};
