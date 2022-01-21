const canvasElem = document.querySelector('.canvas');
const ctx = canvasElem.getContext('2d');

const CANVAS_WIDTH = canvasElem.width;
const CANVAS_HEIGHT = canvasElem.height;
const RECTANGLE_LINEWIDTH = 10;

export { canvasElem, ctx, CANVAS_WIDTH, CANVAS_HEIGHT, RECTANGLE_LINEWIDTH };
