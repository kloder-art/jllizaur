import { Vector3 } from 'three';

export const checkBoxBoundaries = (
  current: Vector3,
  plus: Vector3,
  boundary: number = 450,
) => {
  const nextPosition = new Vector3().addVectors(current, plus);

  if (nextPosition.z < -boundary || nextPosition.z > boundary) {
    nextPosition.z = current.z;
  }
  if (nextPosition.x < -boundary || nextPosition.x > boundary) {
    nextPosition.x = current.x;
  }

  return nextPosition;
};
