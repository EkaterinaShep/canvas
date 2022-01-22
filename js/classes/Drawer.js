class Drawer {
  canvasElem = document.querySelector('canvas');
  ctx = this.canvasElem.getContext('2d');
  canvasWidth = this.canvasElem.width;
  canvasHeight = this.canvasElem.height;

  constructor() {}

  drawBall({ ball }) {
    this.ctx.beginPath();
    this.ctx.arc(ball.x, ball.y, ball.radius, ball.startAngle, ball.endAngle);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    this.ctx.closePath();
  }

  clearRect() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
}

export const drawer = new Drawer();
