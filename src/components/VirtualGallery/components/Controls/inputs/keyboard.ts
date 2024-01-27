import { Quaternion, Vector3 } from 'three';

export type KeyboardState = {
  [key: string]: boolean;
};

export const getOnKeyDown = (state: KeyboardState) => (event: Event) => {
  state[(event as KeyboardEvent).code] = true;
};

export const getOnKeyUp = (state: KeyboardState) => (event: Event) => {
  state[(event as KeyboardEvent).code] = false;
};

export const getHasKey = (state: KeyboardState) => (code: string) =>
  !!state[code];

/**
 * Update position on keyboard state
 * WASD keys to move the camera in the phi (Y) angle
 */
export const keyboardUpdatePosition = (
  state: KeyboardState,
  phi: number,
  delta: number,
) => {
  const hasKey = getHasKey(state);
  const forwardVelocity = (hasKey('KeyW') ? 1 : 0) + (hasKey('KeyS') ? -1 : 0);
  const strafeVelocity = (hasKey('KeyA') ? 1 : 0) + (hasKey('KeyD') ? -1 : 0);
  const hasBooster = hasKey('ShiftLeft') || hasKey('ShiftRight');
  const factor = hasBooster ? 30 : 10;

  const qx = new Quaternion();
  qx.setFromAxisAngle(new Vector3(0, 1, 0), phi);

  const forward = new Vector3(0, 0, -10);
  forward.applyQuaternion(qx);
  forward.multiplyScalar(forwardVelocity * delta * factor);

  const left = new Vector3(-10, 0, 0);
  left.applyQuaternion(qx);
  left.multiplyScalar(strafeVelocity * delta * factor);

  return forward.add(left);
};
