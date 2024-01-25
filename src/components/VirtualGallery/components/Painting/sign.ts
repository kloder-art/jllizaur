export const getSignCanvas = ({
  size,
  title,
  subtitle,
}: {
  size: number;
  title: string;
  subtitle: string;
}) => {
  const borderSize = 8;
  const ctx = document
    .createElement('canvas')
    .getContext('2d') as CanvasRenderingContext2D;
  let font = `${size}px bold sans-serif`;
  ctx.font = font;
  // measure how long the name will be
  const doubleBorderSize = borderSize * 2;
  const width =
    Math.max(ctx.measureText(title).width, ctx.measureText(subtitle).width) +
    doubleBorderSize;
  const height = size * 2 + doubleBorderSize;
  ctx.canvas.width = width;
  ctx.canvas.height = height;

  // need to set font again after resizing canvas
  ctx.font = font;
  ctx.textBaseline = 'top';

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = 'black';
  ctx.fillText(title, borderSize, borderSize);
  font = `${size - 4}px normal sans-serif`;
  ctx.font = font;
  ctx.fillText(subtitle, borderSize, borderSize + size);

  return ctx.canvas;
};
