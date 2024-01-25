import { expect, it, describe } from 'vitest';
import { pathScale, pathToVertices } from './path';

describe('pathToVertices', () => {
  const cases: [string, [number, number][], number, Float32Array][] = [
    [
      'Case 1',
      [
        [0, 0],
        [1, 1],
      ],
      10,
      new Float32Array([
        0, 0, 0, 1, 0, 1, 1, 10, 1, 0, 0, 0, 0, 10, 0, 1, 10, 1,
      ]),
    ],
  ];

  it.each(cases)('%s', (_title, path, height, expected) => {
    expect(pathToVertices(path, height)).toEqual(expected);
  });
});

describe('pathScale', () => {
  const cases: [string, [number, number][], number, [number, number][]][] = [
    [
      'Case 1',
      [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      2,
      [
        [2, 2],
        [4, 4],
        [6, 6],
      ],
    ],
  ];

  it.each(cases)('%s', (_title, path, scale, expected) => {
    expect(pathScale(path, scale)).toEqual(expected);
  });
});
