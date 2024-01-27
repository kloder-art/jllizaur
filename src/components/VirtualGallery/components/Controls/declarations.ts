import { Quaternion, Vector3 } from 'three';

export type ControlsState = {
  rotation: Quaternion;
  translation: Vector3;
  phi: number;
  theta: number;
};
