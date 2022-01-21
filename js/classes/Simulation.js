class Simulation {
  dx = 1;
  dy = -1;

  constructor(drawer, ball) {
    this.drawer = drawer;
    this.ball = ball;
  }

  startBallAnimation() {
    setInterval(() => this.drawAnimatedBall(), 10);
  }

  drawAnimatedBall() {
    this.drawer.clearRect();

    this.drawer.drawBall({
      radius: this.ball.radius,
      x: this.ball.x,
      y: this.ball.y,
      startAngle: 0,
      endAngle: Math.PI * 2,
    });

    if (
      this.ball.x + this.dx >
        this.drawer.canvasWidth -
          this.ball.radius -
          this.drawer.rectLineWidth / 2 ||
      this.ball.x + this.dx < this.ball.radius + this.drawer.rectLineWidth / 2
    ) {
      this.dx = -this.dx;
    }
    if (
      this.ball.y + this.dy >
        this.drawer.canvasHeight -
          this.ball.radius -
          this.drawer.rectLineWidth / 2 ||
      this.ball.y + this.dy < this.ball.radius + this.drawer.rectLineWidth / 2
    ) {
      this.dy = -this.dy;
    }

    this.ball.x += this.dx;
    this.ball.y += this.dy;

    this.drawer.drawRectangle({ lineWidth: this.drawer.rectLineWidth });
  }
}

export default Simulation;
