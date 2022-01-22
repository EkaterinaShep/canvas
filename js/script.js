import { Ball, drawer, Simulation } from './classes/index.js';
import {
  BALL_END_ANGLE,
  BALL_RADIUS,
  BALL_START_ANGLE,
  SPEED,
} from './constants.js';

const ball = new Ball({
  radius: BALL_RADIUS,
  startAngle: BALL_START_ANGLE,
  endAngle: BALL_END_ANGLE,
  speed: SPEED,
  startCoordinates: {
    x: drawer.canvasWidth / 1.5,
    y: drawer.canvasHeight / 1.5,
  },
});


new Simulation(drawer, ball).startBallAnimation();
