import { collider } from './classes/Collider.js';
import { Ball, drawer, Simulation } from './classes/index.js';
import getRandomStartCoordinates from './helpers/get-random-start-coordinates.js';
import getRandomVelocities from './helpers/get-random-velocities.js';

const simulation = new Simulation(drawer, collider);
const balls = [
  {
    radius: 10,
    startCoordinates: getRandomStartCoordinates({
      radius: 10,
      canvasWidth: drawer.canvasWidth,
      canvasHeight: drawer.canvasHeight,
    }),
    velocities: getRandomVelocities(),
    color: 'blue',
  },
  {
    radius: 5,
    startCoordinates: getRandomStartCoordinates({
      radius: 5,
      canvasWidth: drawer.canvasWidth,
      canvasHeight: drawer.canvasHeight,
    }),
    velocities: getRandomVelocities(),
    color: 'red',
  },
  {
    radius: 20,
    startCoordinates: getRandomStartCoordinates({
      radius: 20,
      canvasWidth: drawer.canvasWidth,
      canvasHeight: drawer.canvasHeight,
    }),
    velocities: getRandomVelocities(),
    color: 'green',
  },
];

balls.forEach((ball) => simulation.addBall(new Ball(ball)));

simulation.startBallsAnimation();
