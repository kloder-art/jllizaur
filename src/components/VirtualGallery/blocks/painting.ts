import * as THREE from 'three';
import { IGatsbyImageData, getSrc } from 'gatsby-plugin-image';

import { galleryMap } from '../galleryMap';
import { makeLabelCanvas } from './label';

type Params = {
  height: number;
  image: IGatsbyImageData;
  technic: string;
  title: string;
  width: number;
  year: number;
};

export const getPainting = ({
  width,
  height,
  image,
  title,
  technic,
  // year,
}: Params): THREE.Group => {
  const group = new THREE.Group();

  // Picture

  const imageSrc = getSrc(image) as string;

  const loader = new THREE.TextureLoader();
  const texture = loader.load(imageSrc);
  texture.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.PlaneGeometry(width, height);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.x = galleryMap[title].position.x;
  mesh.position.z = galleryMap[title].position.z + 0.5;

  group.add(mesh);

  // Create sides
  const sideMaterial = new THREE.MeshBasicMaterial({
    color: '#b88b5c',
    side: THREE.DoubleSide,
  });
  const upGeom = new THREE.PlaneGeometry(width, 1);
  const downGeom = upGeom.clone();
  const leftGeom = new THREE.PlaneGeometry(1, height);
  const rightGeom = leftGeom.clone();
  const up = new THREE.Mesh(upGeom, sideMaterial);
  up.rotation.x = Math.PI / 2;
  up.position.x = galleryMap[title].position.x;
  up.position.y = -height / 2;
  group.add(up);
  const down = new THREE.Mesh(downGeom, sideMaterial);
  down.rotation.x = -Math.PI / 2;
  down.position.x = galleryMap[title].position.x;
  down.position.y = height / 2;
  group.add(down);
  const left = new THREE.Mesh(leftGeom, sideMaterial);
  left.rotation.y = -Math.PI / 2;
  left.position.x = galleryMap[title].position.x - width / 2;
  group.add(left);
  const right = new THREE.Mesh(rightGeom, sideMaterial);
  right.rotation.y = Math.PI / 2;
  right.position.x = galleryMap[title].position.x + width / 2;
  group.add(right);

  // Text

  const canvas = makeLabelCanvas({
    size: 24,
    title,
    subtitle: `${width}x${height}: ${technic}`,
  });
  const labelTexture = new THREE.CanvasTexture(canvas);
  labelTexture.minFilter = THREE.LinearFilter;
  labelTexture.wrapS = THREE.ClampToEdgeWrapping;
  labelTexture.wrapT = THREE.ClampToEdgeWrapping;

  const labelGeometry = new THREE.PlaneGeometry(
    canvas.width / 10,
    canvas.height / 10,
  );
  const labelMaterial = new THREE.MeshBasicMaterial({
    map: labelTexture,
    precision: 'highp',
  });
  const label = new THREE.Mesh(labelGeometry, labelMaterial);

  label.position.y = -(height / 2) - 5 - label.geometry.parameters.height / 2;
  label.position.x =
    galleryMap[title].position.x -
    width / 2 +
    label.geometry.parameters.width / 2;
  label.position.z = galleryMap[title].position.z;

  group.add(label);

  return group;
};
