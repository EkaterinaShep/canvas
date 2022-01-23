export default function getRandomVelocities() {
  const randomSpeed = Math.floor(Math.random() * 5) + 1;
  const randomAngle = Math.floor(Math.random() * 360);
  const radiansFromRandomAngle = (randomAngle * Math.PI) / 180;

  return {
    vx: Math.cos(radiansFromRandomAngle) * randomSpeed,
    vy: Math.sin(radiansFromRandomAngle) * randomSpeed,
  };
}
