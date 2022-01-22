class Drawer {
  canvasElem = document.querySelector('canvas');
  ctx = this.canvasElem.getContext('2d');
  canvasWidth = this.canvasElem.width;
  canvasHeight = this.canvasElem.height;

  constructor() {}

  drawRectangle({
    lineWidth,
    x = 0,
    y = 0,
    width = this.canvasWidth,
    height = this.canvasHeight,
  }) {
    this.rectLineWidth = lineWidth;

    this.ctx.lineWidth = this.rectLineWidth;
    this.ctx.strokeRect(x, y, width, height);
  }

  drawBall({ ball }) {
    this.ctx.beginPath();
    this.ctx.arc(ball.x, ball.y, ball.radius, ball.startAngle, ball.endAngle);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    this.ctx.closePath();
  }

  clearRect() {
    this.ctx.clearRect(
      this.rectLineWidth / 2,
      this.rectLineWidth / 2,
      this.canvasWidth - this.rectLineWidth,
      this.canvasHeight - this.rectLineWidth
    );
  }
}

export const drawer = new Drawer();
