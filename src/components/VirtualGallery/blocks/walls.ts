import * as THREE from 'three';

export const getWalls = (path: THREE.Path, material: THREE.Material) => {
  const group = new THREE.Group();

  const walls: THREE.Mesh[] = path
    .getPoints()
    .map((p, idx, arr) => {
      if (idx < arr.length - 1) {
        const n = arr[idx + 1];
        const geometry = new THREE.BufferGeometry();
        // prettier-ignore
        const vertices = new Float32Array([
          // lower triangle
          p.x, 0, p.y,
          n.x, 0, n.y,
          n.x, 300, n.y,
          // upper triangle
          p.x, 0, p.y,
          p.x, 300, p.y,
          n.x, 300, n.y,
        ]);
        geometry.setAttribute(
          'position',
          new THREE.BufferAttribute(vertices, 3),
        );
        return new THREE.Mesh(geometry, material);
      } else {
        return new THREE.Mesh();
      }
    })
    .slice(0, -1);

  walls.forEach((wall: THREE.Mesh) => {
    group.add(wall);
  });
  group.translateY(-170);

  return group;
};
