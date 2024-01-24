type GalleryMap = {
  [key: string]: {
    position: {
      x: number;
      z: number;
    };
    rotation: number;
  };
};

export const getGalleryMap = (boundary = 307): GalleryMap => ({
  // front wall
  'Teoría y práctica de medidas y pesos en hidráulica moderna': {
    position: { x: 0, z: -boundary },
    rotation: 0,
  },
  'El principio de Arquímedes': {
    position: { x: 150, z: -boundary },
    rotation: 0,
  },
  'De los tres elementos nace el fuego': {
    position: { x: -180, z: -boundary },
    rotation: 0,
  },
  'Inmersión I': {
    position: { x: 370, z: -boundary },
    rotation: 0,
  },
  'Inmersión II': {
    position: { x: 270, z: -boundary },
    rotation: 0,
  },
  Bañista: {
    position: { x: 450, z: -boundary },
    rotation: 0,
  },
  'Rocas ergonomicas I': {
    position: { x: -380, z: -boundary },
    rotation: 0,
  },

  // Left wall
  'Los cuatro elementos': {
    position: { x: -boundary, z: -200 },
    rotation: Math.PI / 2,
  },
  'Línea de flotación I': {
    position: { x: -boundary, z: 0 },
    rotation: Math.PI / 2,
  },
  'Línea de flotación II': {
    position: { x: -boundary, z: 200 },
    rotation: Math.PI / 2,
  },
  'Aproximación a la vida sexual del erizo de mar I': {
    position: { x: -boundary, z: 400 },
    rotation: Math.PI / 2,
  },
  'Aproximación a la vida sexual del erizo de mar II': {
    position: { x: -boundary, z: -400 },
    rotation: Math.PI / 2,
  },

  // right wall
  'Caravaggio en una piscina': {
    position: { x: boundary, z: -200 },
    rotation: -Math.PI / 2,
  },
  'A vista de pez': {
    position: { x: boundary, z: -50 },
    rotation: -Math.PI / 2,
  },
  Bañistas: {
    position: { x: boundary, z: 100 },
    rotation: -Math.PI / 2,
  },
  Profundidad: {
    position: { x: boundary, z: 250 },
    rotation: -Math.PI / 2,
  },
  Reflexión: {
    position: { x: boundary, z: -350 },
    rotation: -Math.PI / 2,
  },
  Refracción: {
    position: { x: boundary, z: 400 },
    rotation: -Math.PI / 2,
  },
});
