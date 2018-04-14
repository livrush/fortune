import mojs from 'mo-js';

export function circleMaker(fill) {
  return new mojs.Shape({
    parent: '#emblem',
    shape: 'circle',
    radius: { 0: 62.5 },
    fill,
    duration: 1000,
    delay: 200,
  });
}

export function badCircleMaker(fill) {
  return new mojs.Shape({
    parent: '#emblem',
    shape: 'circle',
    radius: 23,
    fill,
    duration: 1000,
    delay: 200,
  });
}

export function diagonalLineMaker(color, y, delay) {
  return new mojs.Shape({
    angle: -35,
    duration: 500,
    fill: 'none',
    parent: '#card-back',
    radius: 200,
    shape: 'line',
    stroke: { transparent: color },
    strokeWidth: { 0: 3 },
    y,
  })
  .then({
    delay,
    duration: 500,
    strokeWidth: { 3: 14 },
  })
  .then({
    duration: 500,
    strokeWidth: { 14: 3 },
  })
  .then({
    duration: 500,
    strokeWidth: { 3: 14 },
  })
  .then({
    duration: 500,
    strokeWidth: { 14: 3 },
  });
  // .then({
  //   angle: { '-35': 35 },
  //   duration: 2000,
  // })
  // .then({
  //   angle: { 35: -35 },
  //   duration: 2000,
  // })
  // .then({
  //   angle: { '-35': 35 },
  //   duration: 2000,
  // })
  // .then({
  //   angle: { 35: -35 },
  //   duration: 2000,
  // });
  // .then({
  //   duration: 500,
  //   angle: { 180: 360 },
  // })
  // .then({
  //   duration: 1000,
  //   x: 0,
  //   y: 62.5,
  // })
  // .then({
  //   duration: 1000,
  //   strokeWidth: { 2: endWidth },
  //   x: 0,
  //   y: endPosition,
  // });
}

export function normalLineMaker(endPosition, endWidth, color) {
  return new mojs.Shape({
    angle: 90,
    delay: 1200,
    fill: 'none',
    duration: 1000,
    parent: '#emblem',
    radius: { 0: 62.5 },
    shape: 'line',
    stroke: color,
    strokeWidth: 2,
  })
  .then({
    strokeWidth: 2,
    angle: { 90: 180 },
    duration: 2000,
  })
  .then({
    duration: 500,
    angle: { 180: 360 },
  })
  .then({
    duration: 1000,
    x: 0,
    y: 62.5,
  })
  .then({
    duration: 1000,
    strokeWidth: { 2: endWidth },
    x: 0,
    y: endPosition,
  });
}

export function goodLineMaker(sWidth, color) {
  return new mojs.Shape({
    angle: 90,
    delay: 1200,
    fill: 'none',
    duration: 1000,
    parent: '#emblem',
    radius: { 0: 62.5 },
    shape: 'line',
    stroke: color,
    strokeWidth: 2,
  })
  .then({
    duration: 2000,
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

export function badLineMaker(sWidth, color) {
  const Line = new mojs.Shape({
    angle: 90,
    delay: 1200,
    fill: 'none',
    duration: 1000,
    parent: '#emblem',
    radius: { 0: 62.5 },
    shape: 'line',
    stroke: color,
    strokeWidth: 2,
  })
  .then({
    angle: { 90: 180 },
    duration: 2000,
  })
  .then({
    angle: { 180: 415 },
    duration: 500,
  });

  for (let i = 10; i > 0; i -= 1) {
    Line.then({
      angle: { 415: 410 },
      duration: i * 15,
    })
    .then({
      angle: { 410: 420 },
      duration: i * 15,
    });
  }

  return Line;
}

export function badLineMaker2(sWidth, color) {
  const Line = new mojs.Shape({
    angle: 90,
    delay: 1200,
    fill: 'none',
    duration: 1000,
    parent: '#emblem',
    radius: { 0: 23 },
    shape: 'line',
    strokeWidth: 2,
  })
  .then({
    angle: { 90: 180 },
    duration: 2000,
  })
  .then({
    angle: { 180: 415 },
    duration: 500,
  });
  
  for (let i = 10; i > 0; i -= 1) {
    Line.then({
      angle: { 415: 410 },
      duration: i * 15,
    })
    .then({
      duration: i * 15,
    });
  }
  
  Line.then({
    stroke: color,
  })
  .then({
    angle: { 420: 480 },
    duration: 200,
  })

  return Line;
}

export function goodCurveMaker(width, height, x, y, delay, sWidth, color) {
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
    delay: delay + 3000,
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
