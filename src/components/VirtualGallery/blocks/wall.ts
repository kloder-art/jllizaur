import * as THREE from 'three';

export const getWall = () => {
  const geometry = new THREE.PlaneGeometry(3800, 300);
  const material = new THREE.MeshBasicMaterial({
    color: '#eee',
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -1;
  mesh.position.y = 20;
  return mesh;
};
