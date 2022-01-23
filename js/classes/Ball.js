class Ball {
  constructor({
    radius,
    startAngle = 0,
    endAngle = Math.PI * 2,
    velocities,
    startCoordinates,
    color,
  }) {
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.vx = velocities.vx;
    this.vy = velocities.vy;
    this.x = startCoordinates.x;
    this.y = startCoordinates.y;
    this.color = color;
  }

  changeCoordinates() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

export default Ball;
