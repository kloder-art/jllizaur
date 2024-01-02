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

  const geometry = new THREE.BoxGeometry(width, height, 1);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const cube = new THREE.Mesh(geometry, material);

  cube.position.x = galleryMap[title].position.x;
  cube.position.z = galleryMap[title].position.z;

  group.add(cube);

  // Text

  const canvas = makeLabelCanvas({
    size: 32,
    title,
    subtitle: `${width}x${height}: ${technic}`,
  });
  const labelTexture = new THREE.CanvasTexture(canvas);
  labelTexture.minFilter = THREE.LinearFilter;
  labelTexture.wrapS = THREE.ClampToEdgeWrapping;
  labelTexture.wrapT = THREE.ClampToEdgeWrapping;

  const labelGeometry = new THREE.BoxGeometry(
    canvas.width / 10,
    canvas.height / 10,
    0.1,
  ); // w 3 : h 1 // <<<<<<<<<
  const labelMaterial = new THREE.MeshBasicMaterial({ map: labelTexture });
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
