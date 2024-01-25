export const pathScale = (
  path: [number, number][],
  scale = 1,
): [number, number][] => path.map(([x, y]) => [x * scale, y * scale]);

export const pathToVertices = (
  path: [number, number][],
  height: number = 300,
) => {
  return new Float32Array(
    path.reduce((prev, [x1, y1], idx, arr) => {
      if (idx < arr.length - 1) {
        const [x2, y2] = arr[idx + 1];
        // prettier-ignore
        return prev.concat([
          // lower triangle
          x1, 0, y1,
          x2, 0, y2,
          x2, height, y2,
          // upper triangle
          x1, 0, y1,
          x1, height, y1,
          x2, height, y2,
        ]);
      }
      return prev;
    }, [] as number[]),
  );
};
