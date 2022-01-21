import { Ball, drawer, Simulation } from './classes/index.js';
import {
  BALL_END_ANGLE,
  BALL_RADIUS,
  BALL_START_ANGLE,
  RECTANGLE_LINEWIDTH,
} from './constants.js';

drawer.drawRectangle({ lineWidth: RECTANGLE_LINEWIDTH });
const ball = new Ball({
  drawer,
  radius: BALL_RADIUS,
  startAngle: BALL_START_ANGLE,
  endAngle: BALL_END_ANGLE,
});

new Simulation(drawer, ball).startBallAnimation();

// import {
//   CANVAS_HEIGHT,
//   CANVAS_WIDTH,
//   ctx,
//   RECTANGLE_LINEWIDTH,
// } from './constants.js';
// import { drawRectangle, setContextToBallAnimation } from './functions/index.js';

// drawRectangle({
//   context: ctx,
//   lineWidth: RECTANGLE_LINEWIDTH,
//   width: CANVAS_WIDTH,
//   height: CANVAS_HEIGHT,
// });

// const drawAnimatedBall = setContextToBallAnimation({
//   CANVAS_HEIGHT,
//   CANVAS_WIDTH,
//   ctx,
//   RECTANGLE_LINEWIDTH,
// });

// setInterval(drawAnimatedBall, 10);
