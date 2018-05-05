<template>
  <div id="fortune-wrapper" class="fortune-wrapper fade-in-down" v-on:click="flip">
    <div class="fortune slide">
      <div class="fortune-flipper">
        <div id="fortune-inner-back" class="fortune-side back">
          <FortuneBack :themeColors="themeColors" />
        </div>
        <div id="fortune-inner-front" class="fortune-side front">
          <FortuneFront :themeColors="themeColors" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

import FortuneFront from './FortuneFront';
import FortuneBack from './FortuneBack';

// let flipped = true;

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
        $('#fortune-wrapper').toggleClass('active');
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
  0%     {
    transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
  }
  12.5%  {
    transform: translate(-4px, 4px);
    -o-transform: translate(-4px, 4px);
    -ms-transform: translate(-4px, 4px);
    -moz-transform: translate(-4px, 4px);
    -webkit-transform: translate(-4px, 4px);
  }
  25%    {
    transform: translate(-8px, 0px);
    -o-transform: translate(-8px, 0px);
    -ms-transform: translate(-8px, 0px);
    -moz-transform: translate(-8px, 0px);
    -webkit-transform: translate(-8px, 0px);
  }
  37.5%  {
    transform: translate(-4px, -4px);
    -o-transform: translate(-4px, -4px);
    -ms-transform: translate(-4px, -4px);
    -moz-transform: translate(-4px, -4px);
    -webkit-transform: translate(-4px, -4px);
  }
  50%    {
    transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
  }
  62.5%  {
    transform: translate(4px, 4px);
    -o-transform: translate(4px, 4px);
    -ms-transform: translate(4px, 4px);
    -moz-transform: translate(4px, 4px);
    -webkit-transform: translate(4px, 4px);
  }
  75%    {
    transform: translate(8px, 0px);
    -o-transform: translate(8px, 0px);
    -ms-transform: translate(8px, 0px);
    -moz-transform: translate(8px, 0px);
    -webkit-transform: translate(8px, 0px);
  }
  87.5%  {
    transform: translate(4px, -4px);
    -o-transform: translate(4px, -4px);
    -ms-transform: translate(4px, -4px);
    -moz-transform: translate(4px, -4px);
    -webkit-transform: translate(4px, -4px);
  }
  100%   {
    transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
  }
}

@keyframes fadeInDown {
  0% {
    transform: translateY(-35px);
    -o-transform: translateY(-35px);
    -ms-transform: translateY(-35px);
    -moz-transform: translateY(-35px);
    -webkit-transform: translateY(-35px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    -o-transform: translateY(0);
    -ms-transform: translateY(0);
    -moz-transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
  }
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

.fortune-wrapper {
  margin: auto;
  margin-top: 25px;
  width: 250px;
  height: 350px;
}

/* entire container, keeps perspective */
.fortune-wrapper {
	perspective: 1000px;
}
/* flip the pane when hovered */
.fortune-wrapper.active .fortune-flipper {
  transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
}

/* flip speed goes here */
.fortune-flipper {
	position: relative;
	transition: 1s;
  -o-transition: 1s;
  -ms-transition: 1s;
  -moz-transition: 1s;
	-webkit-transition: 1s;
	transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d;
}

.fortune {
  position: relative;
  height: 100%;
  width: 100%;
}

/* hide back of pane during swap */
.fortune-side {
	backface-visibility: hidden;
  cursor: pointer;
	left: 0;
	position: absolute;
	top: 0;
	-webkit-backface-visibility: hidden;
}

/* front pane, placed above back */
.back {
	z-index: 2;
  transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
}

/* back, initially hidden pane */
.front {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
}
</style>
