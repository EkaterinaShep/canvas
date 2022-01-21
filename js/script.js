import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  ctx,
  RECTANGLE_LINEWIDTH,
} from './constants.js';
import { drawRectangle, setContextToBallAnimation } from './functions/index.js';

drawRectangle({
  context: ctx,
  lineWidth: RECTANGLE_LINEWIDTH,
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
});

const drawAnimatedBall = setContextToBallAnimation({
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  ctx,
  RECTANGLE_LINEWIDTH,
});

setInterval(drawAnimatedBall, 10);
