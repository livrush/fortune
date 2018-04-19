<template>
  <div class="fortune-outer" v-bind:style="fortuneStyles">
    <div class="fortune-inner">
      <div id="card-back" class="fortune-inner-back" v-bind:style="{ 'border-color': color2 }">
      </div>
    </div>
  </div>
</template>

<script>
import mojs from 'mo-js';

import {
  diagonalLineMaker,
} from '../mojsHelpers';


export default {
  name: 'FortuneBack',
  props: {
    themeColors: Array,
  },
  data() {
    const { themeColors } = this;
    return {
      color1: themeColors[0].hues[3],
      color2: themeColors[1].hues[1],
    };
  },
  mounted() {
    const { themeColors } = this;
    // const color1 = themeColors[0].hues[3];
    const color2 = themeColors[1].hues[1];

    this.$nextTick(() => {
      const timeline = new mojs.Timeline({
        delay: 500,
        parent: '#emblem',
      });

      for (let i = -12; i < 13; i += 1) {
        timeline.add(
          diagonalLineMaker(color2, i * 21, (i + 13) * 50),
        );
      }

      timeline.play();
    });
  },
  computed: {
    fortuneStyles() {
      const { themeColors } = this;
      const color1 = themeColors[0].hues[3];
      const color2 = themeColors[1].hues[1];
      return {
        'box-shadow': `2px 2px 14px ${color1}`,
        background: color1,
        color: color2,
      };
    },
  },
};
</script>

<style scoped>
.fortune-outer {
  margin: auto;
  width: 250px;
  height: 350px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  border-radius: 5px;
}

.fortune-inner {
  border: 3px solid;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 3.5px;
  position: relative;
}
</style>
