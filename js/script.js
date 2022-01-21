import Ball from './classes/Ball.js';
import { drawer } from './classes/Drawer.js';
import Simulation from './classes/Simulation.js';
import { RECTANGLE_LINEWIDTH } from './constants.js';

drawer.drawRectangle({ lineWidth: RECTANGLE_LINEWIDTH });
const ball = new Ball({
  drawer,
  radius: 10,
  startAngle: 0,
  endAngle: Math.PI * 2,
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
