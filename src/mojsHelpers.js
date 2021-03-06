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


// ! BACK ///////////////////////////////////////////////
// ! BACK ///////////////////////////////////////////////
// ! BACK ///////////////////////////////////////////////

export function diagonalLineMaker(color, y, delay) {
  const Line = new mojs.Shape({
    angle: -35,
    delay,
    duration: 500,
    fill: 'none',
    parent: '#card-back',
    radius: 200,
    shape: 'line',
    stroke: { transparent: color },
    strokeWidth: { 0: 14 },
    y,
  })
  .then({
    duration: 500,
    strokeWidth: { 14: 3 },
  })
  .then({
    duration: 1000,
    strokeWidth: 3,
  })
  .then({
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

  setInterval(() => {
    Line.then({
      duration: 500,
      strokeWidth: { 3: 14 },
    })
    .then({
      duration: 500,
      strokeWidth: { 14: 3 },
    });
  }, 5000);

  return Line;
}

// ! NORMAL ///////////////////////////////////////////////
// ! NORMAL ///////////////////////////////////////////////
// ! NORMAL ///////////////////////////////////////////////

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
    duration: 500,
    x: 0,
    y: 65,
  })
  .then({
    duration: 1500,
    strokeWidth: { 2: endWidth },
    x: 0,
    y: endPosition,
  });
}

// ! GOOD ///////////////////////////////////////////////
// ! GOOD ///////////////////////////////////////////////
// ! GOOD ///////////////////////////////////////////////

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

// ! BAD ///////////////////////////////////////////////
// ! BAD ///////////////////////////////////////////////
// ! BAD ///////////////////////////////////////////////

export function badCircleMaker(fill) {
  const Circle = new mojs.Shape({
    delay: 4400,
    // fill: 'transparent',
    parent: '#emblem',
    shape: 'circle',
    radius: 22,
    fill,
  });

  for (let i = 10; i > 0; i -= 1) {
    Circle.then({
      duration: i * 15 * 2,
    });
  }

  Circle.then({
    duration: 50,
    // fill: { transparent: fill },
  });

  return Circle;
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
    y: 0,
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
      duration: i * 20,
    })
    .then({
      angle: { 410: 420 },
      duration: i * 20,
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
    stroke: color,
    strokeWidth: 2,
    y: 0,
  })
  .then({
    angle: { 90: 180 },
    duration: 2000,
    y: -1,
  })
  .then({
    angle: { 180: 415 },
    duration: 500,
  });

  for (let i = 10; i > 0; i -= 1) {
    Line.then({
      angle: { 415: 410 },
      duration: i * 20,
    })
    .then({
      angle: { 410: 420 },
      duration: i * 20,
    });
  }

  Line.then({
    stroke: color,
  })
  .then({
    angle: { 420: 480 },
    duration: 200,
  });

  return Line;
}

