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

  drawBall({ radius, x, y, startAngle, endAngle }) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, startAngle, endAngle);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export const drawer = new Drawer();
