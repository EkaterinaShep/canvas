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
    this.drawer.ctx.clearRect(
      this.drawer.rectLineWidth / 2,
      this.drawer.rectLineWidth / 2,
      this.drawer.canvasWidth - this.drawer.rectLineWidth,
      this.drawer.canvasHeight - this.drawer.rectLineWidth
    );

    this.drawer.drawBall({
      radius: this.ball.ballRadius,
      x: this.ball.x,
      y: this.ball.y,
      startAngle: 0,
      endAngle: Math.PI * 2,
    });

    if (
      this.ball.x + this.dx >
        this.drawer.canvasWidth -
          this.ball.ballRadius -
          this.drawer.rectLineWidth / 2 ||
      this.ball.x + this.dx <
        this.ball.ballRadius + this.drawer.rectLineWidth / 2
    ) {
      this.dx = -this.dx;
    }
    if (
      this.ball.y + this.dy >
        this.drawer.canvasHeight -
          this.ball.ballRadius -
          this.drawer.rectLineWidth / 2 ||
      this.ball.y + this.dy <
        this.ball.ballRadius + this.drawer.rectLineWidth / 2
    ) {
      this.dy = -this.dy;
    }

    this.ball.x += this.dx;
    this.ball.y += this.dy;

    this.drawer.drawRectangle({ lineWidth: this.drawer.rectLineWidth });
  }
}

export default Simulation;
