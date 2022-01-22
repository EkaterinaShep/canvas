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

  changeCoordinates({ canvasWidth, canvasHeight }) {
    if (
      this.x + this.dx > canvasWidth - this.radius ||
      this.x + this.dx < this.radius
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.dy > canvasHeight - this.radius ||
      this.y + this.dy < this.radius
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

export default Ball;
