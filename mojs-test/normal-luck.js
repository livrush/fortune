// const circle = new mojs.Shape({
//   shape: 'circle',
//   parent: '#normal-emblem',
//   radius: { 0: 100},
//   fill: '#24232A',
//   duration: 1000,
//   delay: 200,
// });

function lineMaker(endPosition, endWidth) {
  return new mojs.Shape({
    shape: 'line',
    parent: '#normal-emblem',
    stroke: '#803C40',
    fill: 'none',
    radius: { 0: 100 },
    strokeWidth: 2,
    angle: -90,
    duration: 1000,
    delay: 1200,
  }).then({
    fill: 'none',
    strokeWidth: 2,
    angle: { [-90]: 0 },
    duration: 2000,
    // delay: 500,
  }).then({
    duration: 1000,
    x: 0,
    y: 90,
  }).then({
    duration: 1000,
    strokeWidth: { 2: endWidth },
    x: 0,
    y: endPosition,
  });
}

// shape.play();

const normalTimeline = new mojs.Timeline({
  delay: 500,
});

normalTimeline.add(
  circle,
  lineMaker(-90, 20),
  lineMaker(-70, 18),
  lineMaker(-50, 16),
  lineMaker(-30, 14),
  lineMaker(-10, 12),
  lineMaker(10, 10),
  lineMaker(30, 8),
  lineMaker(50, 6),
  lineMaker(70, 4),
  lineMaker(90, 2)
);

normalTimeline.play()