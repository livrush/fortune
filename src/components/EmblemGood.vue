
<template>  
  <div></div>
</template>

<script>
/* eslint-disable */
import mojs from 'mo-js';

import {
  pullRandom,
  luck,
  verbs,
  groups,
  colors,
} from '../groups';

  import {
    circleMaker,
    goodLineMaker,
    goodCurveMaker,
  } from '../mojsHelpers';

const color1 = pullRandom(colors);
const color2 = pullRandom(colors);

export default {
  name: 'EmblemNormal',
  props: {
    themeColors: Array,
  },
  data() {
    const { themeColors } = this;
    return {
      luck: pullRandom(luck),
      verb: pullRandom(verbs),
      group: pullRandom(groups),
      bgColor: themeColors[0].hues[2],
      color1: themeColors[0].hues[3],
      color2: themeColors[1].hues[1],
    };
  },
  mounted: function () {
    const { color1, color2 } = this;

    this.$nextTick(function () {
      const timeline = new mojs.Timeline({
        delay: 500,
        parent: '#emblem',
      });

      timeline.add(
        circleMaker(color2),
        goodLineMaker(2, color1),
        goodCurveMaker(40, 175, -40, 62.5, 200, 3, color1),
        goodCurveMaker(40, 175, 40, 62.5, 200, 3, color1),
        goodCurveMaker(75, 150, -75, 62.5, 200, 4, color1),
        goodCurveMaker(75, 150, 75, 62.5, 200, 4, color1),
        goodCurveMaker(90, 120, -90, 62.5, 400, 5, color1),
        goodCurveMaker(90, 120, 90, 62.5, 400, 5, color1),
        goodCurveMaker(100, 95, -100, 62.5, 600, 6, color1),
        goodCurveMaker(100, 95, 100, 62.5, 600, 6, color1),
        goodCurveMaker(100, 65, -100, 62.5, 800, 8, color1),
        goodCurveMaker(100, 65, 100, 62.5, 800, 8, color1),
        goodCurveMaker(80, 35, -80, 62.5, 1000, 9, color1),
        goodCurveMaker(80, 35, 80, 62.5, 1000, 9, color1),
      );

      timeline.play()
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes begin {
  0% {
    transform: rotate(-90deg);
    top: 50%;
  };
  50% {
    transform: rotate(-180deg);
    top: 50%;
  }
  100% {
    top: 80%;
  };
}

.line {
  top: 50%;
  height: 0;
  width: 100%;
  position: absolute;
  border: 1px solid black;
  animation-name: begin;
  animation-duration: 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

/* .emblem {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>
