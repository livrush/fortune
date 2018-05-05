
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
} from '../groups';

import {
  circleMaker,
  normalLineMaker,
} from '../mojsHelpers';

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
      const normalTimeline = new mojs.Timeline({
        delay: 500,
      });

      normalTimeline.add(
        circleMaker(color2),
        normalLineMaker(0, 6, color1),
      );

      for (let i = 1; i < 5; i += 1) {
        normalTimeline.add(
          normalLineMaker(13.5 * i, 6 - i, color1),
          normalLineMaker(-13.5 * i, i + 6, color1),
        );
      }

      normalTimeline.play()
    })
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
