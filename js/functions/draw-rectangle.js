function drawRectangle({ context, lineWidth, x = 0, y = 0, width, height }) {
  context.lineWidth = lineWidth;
  context.strokeRect(x, y, width, height);
}

export default drawRectangle;
