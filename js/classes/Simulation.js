class Simulation {
  constructor(drawer, ball) {
    this.drawer = drawer;
    this.ball = ball;
  }

  startBallAnimation() {
    setInterval(() => this.drawAnimatedBall(), this.ball.speed);
  }

  drawAnimatedBall() {
    this.drawer.clearRect();

    this.drawer.drawBall({
      ball: this.ball,
    });

    this.ball.changeCoordinates({
      canvasWidth: this.drawer.canvasWidth,
      canvasHeight: this.drawer.canvasHeight,
      rectLineWidth: this.drawer.rectLineWidth / 2,
    });
  }
}

export default Simulation;
