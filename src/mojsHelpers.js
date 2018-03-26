import mojs from 'mo-js';

export function circleMaker(fill) {
  return new mojs.Shape({
    parent: '#emblem',
    shape: 'circle',
    radius: { 0: 100 },
    fill,
    duration: 1000,
    delay: 200,
  });
}

export function lineMaker(sWidth, color) {
  return new mojs.Shape({
    parent: '#emblem',
    shape: 'line',
    stroke: color,
    points: 15,
    fill: 'none',
    strokeWidth: 2,
    radius: { 0: 100 },
    delay: 1200,
    angle: 90,
    duration: 1000,
  })
  .then({
    duration: 500,
    angle: { 90: 180 },
  })
  .then({
    duration: 500,
    angle: { 180: 450 },
  })
  .then({
    strokeWidth: { 2: sWidth },
  })
  .then({
    strokeWidth: { [sWidth]: 2 },
  })
  .then({
    strokeWidth: { 2: sWidth },
  });
}

export function curveMaker(width, height, x, y, delay, sWidth, color) {
  return new mojs.Shape({
    parent: '#emblem',
    shape: 'curve',
    points: 15,
    fill: 'none',
    strokeWidth: 2,
    radius: width,
    radiusY: 0,
    x,
    y,
    delay: delay + 1500,
  })
  .then({
    stroke: color,
    delay: 1200,
    radiusY: { 0: height },
    duration: 500,
  })
  .then({
    strokeWidth: { 2: sWidth },
  })
  .then({
    strokeWidth: { [sWidth]: 2 },
  })
  .then({
    strokeWidth: { 2: sWidth },
  });
}
