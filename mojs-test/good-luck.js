const circle = new mojs.Shape({
  parent: '#good-emblem',
  shape: 'circle',
  radius: { 0: 100},
  fill: '#24232A',
  duration: 1000,
  delay: 200,
});

function lineMaker(sWidth) {
  return new mojs.Shape({
    parent: '#good-emblem',
    shape: 'line',
    stroke: '#803C40',
    points: 15,
    fill: 'none',
    strokeWidth: 2,
    radius: { 0: 100 },
    delay: 1200,
    angle: 90,
    duration: 1000,
  }).then({
    duration: 500,
    angle: { 90: 180 },
  }).then({
    duration: 500,
    angle: { 180: 450 },
  }).then({
    strokeWidth: { 2: sWidth },
  }).then({
    strokeWidth: { [sWidth]: 2 },
  }).then({
    strokeWidth: { 2: sWidth },
  });
}

function curveMaker(width, height, x, y, delay, sWidth) {
  return new mojs.Shape({
    parent: '#good-emblem',
    shape: 'curve',
    points: 15,
    // stroke: 'none',
    fill: 'none',
    strokeWidth: 2,
    radius: width,
    radiusY: 0,
    x,
    y,
    delay: delay + 1500,
  }).then({
    stroke: '#803C40',
    delay: 1200,
    radiusY: { 0: height },
    duration: 500,
  }).then({
    strokeWidth: { 2: sWidth },
  }).then({
    strokeWidth: { [sWidth]: 2 },
  }).then({
    strokeWidth: { 2: sWidth },
  });
}

const timeline = new mojs.Timeline({
  delay: 500,
  parent: '#good-emblem'
  // repeat: 10,
});

timeline.add(
  circle, 
  lineMaker(2),
  curveMaker(70, 200, -70, 100, 200, 4),
  curveMaker(70, 200, 70, 100, 200, 4),
  curveMaker(90, 155, -90, 100, 400, 6),
  curveMaker(90, 155, 90, 100, 400, 6),
  curveMaker(100, 115, -100, 100, 600, 8),
  curveMaker(100, 115, 100, 100, 600, 8),
  curveMaker(100, 80, -100, 100, 800, 10),
  curveMaker(100, 80, 100, 100, 800, 10),
  curveMaker(80, 40, -80, 100, 1000, 12),
  curveMaker(80, 40, 80, 100, 1000, 12),
);

timeline.play()