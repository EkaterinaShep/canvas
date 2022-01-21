class Ball {
  constructor({ drawer, radius, startAngle, endAngle }) {
    this.drawer = drawer;
    this.ballRadius = radius;
    this.x = this.drawer.canvasWidth / 1.5;
    this.y = this.drawer.canvasHeight - 30;

    this.drawer.drawBall({
      radius: this.ballRadius,
      x: this.x,
      y: this.y,
      startAngle,
      endAngle,
    });
  }
}

export default Ball;
