
<template>  <div class="emblemNormal">
    <div class="emblem" v-bind:style="{ background: color2, color: color1 }">
      <div class="line line-one" v-bind:style="{ 'border-color': color1 }"></div>
      <div class="line line-two" v-bind:style="{ 'border-color': color1 }"></div>
      <div class="line line-three" v-bind:style="{ 'border-color': color1 }"></div>
      <div class="line line-four" v-bind:style="{ 'border-color': color1 }"></div>
      <div class="line line-five" v-bind:style="{ 'border-color': color1 }"></div>
      <div class="line line-six" v-bind:style="{ 'border-color': color1 }"></div>
    </div>
  </div>
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

const color1 = pullRandom(colors);
const color2 = pullRandom(colors);

// $('body').css('background', color1.hues[2]);

export default {
  name: 'EmblemNormal',
  data() {
    return {
      luck: pullRandom(luck),
      verb: pullRandom(verbs),
      group: pullRandom(groups),
      bgColor: color1.hues[2],
      color1: color1.hues[3],
      color2: color2.hues[1],
    };
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

.emblem {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
