<template>
  <div class="fortune-wrapper fade-in-down">
    <div class="fortune slide">
      <input type="checkbox"  />
      <div id="fortune-inner-back" class="fortune-side back" v-on:click="flip">
        <FortuneBack :themeColors="themeColors" />
      </div>
      <div id="fortune-inner-front" class="fortune-side front" v-on:click="flip">
        <FortuneFront :themeColors="themeColors" />
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

import FortuneFront from './FortuneFront';
import FortuneBack from './FortuneBack';

let flipped = true;

export default {
  name: 'Fortune',
  props: {
    themeColors: Array,
  },
  components: {
    FortuneFront,
    FortuneBack,
  },
  data() {
    const { themeColors } = this;
    return {
      flip() {
        $('#fortune-inner-back').removeClass('flip-in flip-out');
        $('#fortune-inner-front').removeClass('flip-in flip-out');
        if (flipped) {
          $('#fortune-inner-back').addClass('flip-out');
          $('#fortune-inner-front').addClass('flip-in');
        } else {
          $('#fortune-inner-front').addClass('flip-out');
          $('#fortune-inner-back').addClass('flip-in');
        }
        flipped = !flipped;
      },
      color1: themeColors[0].hues[3],
      color2: themeColors[1].hues[1],
    };
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
@keyframes slide {
  0%     { transform: translate(0, 0); }
  12.5%  { transform: translate(-4px, 4px); }
  25%    { transform: translate(-8px, 0px); }
  37.5%  { transform: translate(-4px, -4px); }
  50%    { transform: translate(0, 0); }
  62.5%  { transform: translate(4px, 4px); }
  75%    { transform: translate(8px, 0px); }
  87.5%  { transform: translate(4px, -4px); }
  100%   { transform: translate(0, 0); }
}

@keyframes fadeInDown {
  0% {
    transform: translateY(-35px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes flipOut {
  0%   { transform: rotateY(000deg); z-index: 2; }
  50%  { transform: rotateY(090deg); z-index: 2; }
  100% { transform: rotateY(180deg); z-index: 1; }
}

@keyframes flipIn {
  0%   { transform: rotateY(180deg); z-index: 1; }
  50%  { transform: rotateY(270deg); z-index: 2; }
  100% { transform: rotateY(360deg); z-index: 2; }
}

.fade-in-down {
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function:linear;
}

.slide {
  animation-name: slide;
  animation-delay: 1s;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function:linear;
}

.flip-in {
  transform-style: preserve-3d;
  animation-name: flipIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function:linear;
}

.flip-out {
  transform-style: preserve-3d;
  animation-name: flipOut;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function:linear;
}

.fortune-wrapper {
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  margin: auto;
  margin-top: 25px;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  width: 250px;
  height: 350px;
}

.fortune {
  position: relative;
  height: 100%;
  width: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

input {
  display: none;
}

.fortune > .back {
  z-index: 2;
}

.fortune > .front {
  z-index: 1;
}

.fortune-side {
  position: absolute;
  cursor: pointer;
}
</style>
