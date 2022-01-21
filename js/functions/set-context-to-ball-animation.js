import { drawStaticBall, drawRectangle } from './index.js';

function setContextToBallAnimation({
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  ctx,
  RECTANGLE_LINEWIDTH,
}) {
  const ballRadius = 10;
  let ballX = CANVAS_WIDTH / 1.5;
  let ballY = CANVAS_HEIGHT - 30;
  let dx = 1;
  let dy = -1;

  return () => {
    ctx.clearRect(
      RECTANGLE_LINEWIDTH / 2,
      RECTANGLE_LINEWIDTH / 2,
      CANVAS_WIDTH - RECTANGLE_LINEWIDTH,
      CANVAS_HEIGHT - RECTANGLE_LINEWIDTH
    );

    drawStaticBall({
      ctx,
      radius: ballRadius,
      x: ballX,
      y: ballY,
      startAngle: 0,
      endAngle: Math.PI * 2,
    });

    if (
      ballX + dx > CANVAS_WIDTH - ballRadius - RECTANGLE_LINEWIDTH / 2 ||
      ballX + dx < ballRadius + RECTANGLE_LINEWIDTH / 2
    ) {
      dx = -dx;
    }
    if (
      ballY + dy > CANVAS_HEIGHT - ballRadius - RECTANGLE_LINEWIDTH / 2 ||
      ballY + dy < ballRadius + RECTANGLE_LINEWIDTH / 2
    ) {
      dy = -dy;
    }

    ballX += dx;
    ballY += dy;

    drawRectangle({
      context: ctx,
      lineWidth: RECTANGLE_LINEWIDTH,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
  };
}

export default setContextToBallAnimation;
