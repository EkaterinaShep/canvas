class Ball {
  constructor({ drawer, radius, startAngle, endAngle }) {
    this.drawer = drawer;
    this.radius = radius;
    this.x = this.drawer.canvasWidth / 1.5;
    this.y = this.drawer.canvasHeight / 1.5;

    this.drawer.drawBall({
      radius: this.radius,
      x: this.x,
      y: this.y,
      startAngle,
      endAngle,
    });
  }
}

export default Ball;
