const canvasElem = document.querySelector('.canvas');
const ctx = canvasElem.getContext('2d');

const CANVAS_WIDTH = canvasElem.width;
const CANVAS_HEIGHT = canvasElem.height;
const RECTANGLE_LINEWIDTH = 10;
const BALL_RADIUS = 10;
const BALL_START_ANGLE = 0;
const BALL_END_ANGLE = Math.PI * 2;

export {
  canvasElem,
  ctx,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  RECTANGLE_LINEWIDTH,
  BALL_RADIUS,
  BALL_START_ANGLE,
  BALL_END_ANGLE,
};
