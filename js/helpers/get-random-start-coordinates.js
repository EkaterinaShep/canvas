export default function getRandomStartCoordinates({
  radius,
  canvasWidth,
  canvasHeight,
}) {
  return {
    x: radius * 2 + Math.floor(Math.random() * (canvasWidth - radius * 3)),
    y: radius * 2 + Math.floor(Math.random() * (canvasHeight - radius * 3)),
  };
}
