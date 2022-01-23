class Collider {
  constructor() {}

  checkCollisions({ balls, canvasWidth, canvasHeight }) {
    this.balls = balls;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    for (let i = 0; i < this.balls.length; i++) {
      const ball = this.balls[i];

      this.testCollisionsWithBalls(ball);
      this.testCollisionsWithWalls(ball);
    }
  }

  testCollisionsWithBalls(ball) {
    for (let j = 0; j < this.balls.length; j++) {
      const testBall = this.balls[j];

      if (ball === testBall) {
        continue;
      }

      if (this.isColliding(ball, testBall)) {
        this.collideBalls(ball, testBall);
      }
    }
  }

  testCollisionsWithWalls(ball) {
    if (
      this.isCollidingWithRightWall(ball) ||
      this.isCollidingWithLeftWall(ball)
    ) {
      ball.vx = -ball.vx;
    }
    if (
      this.isCollidingWithBottomWall(ball) ||
      this.isCollidingWithTopWall(ball)
    ) {
      ball.vy = -ball.vy;
    }
  }

  isCollidingWithRightWall(ball) {
    return ball.x + ball.vx > this.canvasWidth - ball.radius;
  }

  isCollidingWithLeftWall(ball) {
    return ball.x + ball.vx < ball.radius;
  }

  isCollidingWithTopWall(ball) {
    return ball.y + ball.vy < ball.radius;
  }

  isCollidingWithBottomWall(ball) {
    return ball.y + ball.vy > this.canvasHeight - ball.radius;
  }

  isColliding(ball1, ball2) {
    const distance = Math.sqrt(
      (ball1.x - ball2.x) ** 2 + (ball1.y - ball2.y) ** 2
    );

    return distance <= ball1.radius + ball2.radius;
  }

  collideBalls(ball1, ball2) {
    const diffs = { dx: ball1.x - ball2.x, dy: ball1.y - ball2.y };
    const speeds = {
      ball1Speed: Math.sqrt(ball1.vx ** 2 + ball1.vy ** 2),
      ball2Speed: Math.sqrt(ball2.vx ** 2 + ball2.vy ** 2),
    };
    const directions = {
      ball1Direction: Math.atan2(ball1.vy, ball1.vx),
      ball2Direction: Math.atan2(ball2.vy, ball2.vx),
    };
    const collisionAngle = Math.atan2(diffs.dy, diffs.dx);

    const ball1Velocities = {
      vx:
        speeds.ball1Speed *
        Math.cos(directions.ball1Direction - collisionAngle),
      vy:
        speeds.ball1Speed *
        Math.sin(directions.ball1Direction - collisionAngle),
    };
    const ball2Velocities = {
      vx:
        speeds.ball2Speed *
        Math.cos(directions.ball2Direction - collisionAngle),
      vy:
        speeds.ball2Speed *
        Math.sin(directions.ball2Direction - collisionAngle),
    };

    const ball1FinalVelocities = {
      vx:
        ((ball1.radius - ball2.radius) * ball1Velocities.vx +
          ball2.radius * 2 * ball2Velocities.vx) /
        (ball1.radius + ball2.radius),
      vy: ball1Velocities.vy,
    };

    const ball2FinalVelocities = {
      vx:
        (ball1.radius * 2 * ball1Velocities.vx +
          (ball2.radius - ball1.radius) * ball2Velocities.vx) /
        (ball1.radius + ball2.radius),
      vy: ball2Velocities.vy,
    };

    ball1.vx =
      Math.cos(collisionAngle) * ball1FinalVelocities.vx +
      Math.cos(collisionAngle + Math.PI / 2) * ball1FinalVelocities.vy;
    ball1.vy =
      Math.sin(collisionAngle) * ball1FinalVelocities.vx +
      Math.sin(collisionAngle + Math.PI / 2) * ball1FinalVelocities.vy;
    ball2.vx =
      Math.cos(collisionAngle) * ball2FinalVelocities.vx +
      Math.cos(collisionAngle + Math.PI / 2) * ball2FinalVelocities.vy;
    ball2.vy =
      Math.sin(collisionAngle) * ball2FinalVelocities.vx +
      Math.sin(collisionAngle + Math.PI / 2) * ball2FinalVelocities.vy;

    ball1.changeCoordinates();
    ball2.changeCoordinates();
  }
}

export const collider = new Collider();
