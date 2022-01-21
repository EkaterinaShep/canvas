function drawStaticBall({ ctx, radius, x, y, startAngle, endAngle }) {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

export default drawStaticBall;
