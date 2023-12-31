import * as React from 'react';
import * as THREE from 'three';
import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Howl } from 'howler';
import { Text } from 'troika-three-text';

import { SEO } from '../components';
import { graphql } from 'gatsby';
import { IGatsbyImageData, getSrc } from 'gatsby-plugin-image';

const bgSound = new Howl({
  src: '/sandy-beach-calm-waves-water-nature-sounds-8052.mp3',
  loop: true,
  volume: 0.2,
});

const offsetX = -1800;

const galleryMap = {
  'Teoría y práctica de medidas y pesos en hidráulica moderna': {
    position: { x: 200 + offsetX, z: 0 },
  },
  'El principio de Arquímedes': {
    position: { x: 400 + offsetX, z: 0 },
  },
  'De los tres elementos nace el fuego': {
    position: { x: 600 + offsetX, z: 0 },
  },
  'Los cuatro elementos': {
    position: { x: 800 + offsetX, z: 0 },
  },
  'Caravaggio en una piscina': {
    position: { x: 1000 + offsetX, z: 0 },
  },
  'Línea de flotación I': {
    position: { x: 1200 + offsetX, z: 0 },
  },
  'Línea de flotación II': {
    position: { x: 1400 + offsetX, z: 0 },
  },
  'A vista de pez': {
    position: { x: 1600 + offsetX, z: 0 },
  },
  Bañistas: {
    position: { x: 1800 + offsetX, z: 0 },
  },
  Profundidad: {
    position: { x: 2000 + offsetX, z: 0 },
  },
  Reflexión: {
    position: { x: 2200 + offsetX, z: 0 },
  },
  Refracción: {
    position: { x: 2400 + offsetX, z: 0 },
  },
  'Aproximación a la vida sexual del erizo de mar I': {
    position: { x: 2600 + offsetX, z: 0 },
  },
  'Aproximación a la vida sexual del erizo de mar II': {
    position: { x: 2800 + offsetX, z: 0 },
  },
  'Inmersión I': {
    position: { x: 3000 + offsetX, z: 0 },
  },
  'Inmersión II': {
    position: { x: 3200 + offsetX, z: 0 },
  },
  Bañista: {
    position: { x: 3400 + offsetX, z: 0 },
  },
  'Rocas ergonomicas I': {
    position: { x: 3600 + offsetX, z: 0 },
  },
};

const xSpeed = 10;
const zSpeed = 10;
const yRotSpeed = Math.PI / 180;

// const locution = new Howl({
//   src: '/ElevenLabs_2023-12-27T23:48:51_James_pre_s50_sb75_m1.mp3',
//   loop: false,
// });

type Props = {
  data: {
    allFile: {
      edges: {
        node: {
          childMarkdownRemark: {
            frontmatter: {
              artwork: {
                height: number;
                image: IGatsbyImageData;
                technic: string;
                title: string;
                width: number;
                year: number;
              }[];
            };
          };
        };
      }[];
    };
  };
};

const TestPage: React.FC<Props> = ({
  data: {
    allFile: { edges },
  },
}) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    bgSound.play();
    document.body.style.overflow = 'hidden';

    // setTimeout(() => {
    //   locution.play();
    // }, 5000);

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    const texts: Text[] = [];

    function onDocumentKeyDown(event: KeyboardEvent) {
      var keyCode = event.code;
      if (keyCode == 'ArrowLeft' || keyCode === 'KeyA') {
        camera.translateX(-xSpeed);
      } else if (keyCode == 'ArrowRight' || keyCode === 'KeyD') {
        camera.translateX(+xSpeed);
      }
      if (keyCode == 'ArrowUp' || keyCode === 'KeyW') {
        camera.translateZ(-zSpeed);
      } else if (keyCode == 'ArrowDown' || keyCode === 'KeyS') {
        camera.translateZ(+zSpeed);
      }
      if (keyCode === 'KeyQ') {
        camera.rotation.y += yRotSpeed;
      } else if (keyCode === 'KeyE') {
        camera.rotation.y -= yRotSpeed;
      }
      if (keyCode == 'Escape') {
        camera.position.set(0, 0, 0);
      }
    }

    let domElement: HTMLCanvasElement;
    if (ref.current) {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      (ref.current as HTMLDivElement).appendChild(renderer.domElement);
      domElement = renderer.domElement;

      const effect = new StereoEffect(renderer);
      effect.setSize(window.innerWidth, window.innerHeight);

      for (const artwork of edges[0].node.childMarkdownRemark.frontmatter
        .artwork) {
        const imageSrc = getSrc(artwork.image) as string;

        const loader = new THREE.TextureLoader();
        const texture = loader.load(imageSrc);
        texture.colorSpace = THREE.SRGBColorSpace;

        const geometry = new THREE.BoxGeometry(
          artwork.width,
          artwork.height,
          1,
        );
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const cube = new THREE.Mesh(geometry, material);

        cube.position.x = galleryMap[artwork.title].position.x;
        cube.position.z = galleryMap[artwork.title].position.z;

        const myText = new Text();
        scene.add(myText);
        texts.push(myText);

        // Set properties to configure:
        myText.text = `${artwork.title}\n${artwork.width}x${artwork.height}: ${artwork.technic}`;
        myText.fontSize = 3;
        myText.position.y = -(artwork.height / 2) - 5;
        myText.position.x =
          galleryMap[artwork.title].position.x - artwork.width / 2;
        myText.position.z = galleryMap[artwork.title].position.z;
        myText.color = 0x000000;

        // Update the rendering:
        myText.sync();

        scene.add(cube);
      }

      const geometry = new THREE.BoxGeometry(3800, 300, 1);
      const material = new THREE.MeshBasicMaterial({ color: '#eee' });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.z = -1;
      cube.position.y = 20;
      scene.add(cube);

      camera.position.z = 225;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(
        camera.position.x,
        camera.position.y,
        camera.position.z,
      );
      controls.noPan = true;
      controls.noZoom = true;

      function animate() {
        requestAnimationFrame(animate);

        // renderer.render(scene, camera);
        effect.render(scene, camera);
      }

      animate();

      document.addEventListener('keydown', onDocumentKeyDown, false);
    }

    return () => {
      document.removeEventListener('keydown', onDocumentKeyDown);
      document.body.style.overflow = 'auto';
      texts.forEach((text) => {
        scene.remove(text);
        text.dispose();
      });
      if (domElement) {
        domElement.remove();
        bgSound.pause();
      }
    };
  }, []);

  return <div ref={ref} />;
};

export default TestPage;

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "artwork" }
        extension: { eq: "md" }
        childMarkdownRemark: {
          frontmatter: { id: { eq: "el-principio-de-arquimedes" } }
        }
      }
      sort: { childMarkdownRemark: { frontmatter: { order: ASC } } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              id
              title
              order
              artwork {
                image {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, quality: 80)
                  }
                }
                title
                year
                width
                height
                technic
              }
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <SEO title="Test" />;
