class Ball {
  dx = 1;
  dy = -1;

  constructor({ radius, startAngle, endAngle, speed, startCoordinates }) {
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.speed = speed;
    this.x = startCoordinates.x;
    this.y = startCoordinates.y;
  }

  changeCoordinates({ canvasWidth, canvasHeight, rectLineWidth }) {
    if (
      this.x + this.dx > canvasWidth - this.radius - rectLineWidth ||
      this.x + this.dx < this.radius + rectLineWidth
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.dy > canvasHeight - this.radius - rectLineWidth ||
      this.y + this.dy < this.radius + rectLineWidth
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

export default Ball;
