class Simulation {
  balls = [];

  constructor(drawer, collider) {
    this.drawer = drawer;
    this.collider = collider;
  }

  addBall(ball) {
    this.balls.push(ball);

    return this;
  }

  startBallsAnimation() {
    setInterval(() => this.animateBalls(), 10);
  }

  animateBalls() {
    this.drawer.clearRect();

    this.balls.forEach((ball) =>
      this.drawer.drawBall({
        ball,
      })
    );

    this.balls.forEach((ball) => ball.changeCoordinates());

    this.collider.checkCollisions({
      balls: this.balls,
      canvasWidth: this.drawer.canvasWidth,
      canvasHeight: this.drawer.canvasHeight,
    });
  }
}

export default Simulation;
