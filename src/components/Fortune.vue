<template>
  <div class="fortune">
    <div class="fortune-wrapper fade-in-down">
      <div class="fortune-outer slide" v-bind:style="fortuneStyles">
        <div class="fortune-inner" v-bind:style="{ 'border-color': color2 }">
          <div id="fortune-inner-back">
          </div>
          <div id="fortune-inner-front">
            <div class="card-flair flair-top-left" v-bind:style="{ background: color2 }"></div>
            <div class="card-flair flair-top-right" v-bind:style="{ background: color2 }"></div>
            <div class="card-flair flair-bottom-left" v-bind:style="{ background: color2 }"></div>
            <div class="card-flair flair-bottom-right" v-bind:style="{ background: color2 }"></div>
            <div id="emblem" class="emblem">
              <emblem :themeColors="themeColors" />
            </div>
            <h2 class="luck">{{ luck }} Luck</h2>
            <hr>
            <div class="reading">{{ verb }} {{ group }}</div>
            <p></p>
            <div class="reading">{{ fortune }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {
  pullRandom,
  luck,
  verbs,
  groups,
  // sentenceStarts,
  // x,
  pronouns,
  preposition,
  // actions,
  verbsBase,
  // verbsPast,
  verbsPastParticiple,
  nouns,
  determiners,
} from '../groups';

import {
  diagonalLineMaker,
} from '../mojsHelpers';

import EmblemGood from './EmblemGood';
import EmblemNormal from './EmblemNormal';
import EmblemBad from './EmblemBad';

const luckType = pullRandom(luck);
let emblemType;
const fortune = `${pullRandom(determiners)} ${pullRandom(nouns)} ${pullRandom(verbsPastParticiple)}
BECAUSE ${pullRandom(preposition)} ${pullRandom(nouns)} ${pullRandom(verbsPastParticiple)} ${pullRandom(pronouns)}
AND ${pullRandom(pronouns)} ${pullRandom(verbsBase)} ${pullRandom(preposition)} ${pullRandom(nouns)} .`;
// const fortune = `${pullRandom(sentenceStarts)} ${pullRandom(x)} ${pullRandom(pronouns)}
// ${pullRandom(verbsBase)} ${pullRandom(preposition)} ${pullRandom(nouns)} .`;

switch (luckType) {
  case 'Very Good':
    emblemType = EmblemGood;
    break;
  case 'Good':
    emblemType = EmblemGood;
    break;
  case 'Normal':
    emblemType = EmblemNormal;
    break;
  case 'Bad':
    emblemType = EmblemBad;
    break;
  case 'Very Bad':
    emblemType = EmblemBad;
    break;
  default:
    emblemType = EmblemNormal;
}

emblemType = EmblemBad;

export default {
  name: 'HelloWorld',
  props: {
    themeColors: Array,
  },
  components: {
    emblem: emblemType,
  },
  data() {
    const { themeColors } = this;
    return {
      luck: luckType,
      verb: pullRandom(verbs),
      group: pullRandom(groups),
      fortune,
      color1: themeColors[0].hues[3],
      color2: themeColors[1].hues[1],
    };
  },
  mounted() {
    const { themeColors } = this;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes slide {
  0%     { transform: translate(0, 0); }
  12.5%  { transform: translate(-2.5px, 2.5px); }
  25%    { transform: translate(-5px, 0px); }
  37.5%  { transform: translate(-2.5px, -2.5px); }
  50%    { transform: translate(0, 0); }
  62.5%  { transform: translate(2.5px, 2.5px); }
  75%    { transform: translate(5px, 0px); }
  87.5%  { transform: translate(2.5px, -2.5px); }
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

@keyframes flipIn {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(00deg);
  }
}

@keyframes flipOut {
  0% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
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
  animation-delay: 2s;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function:linear;
}

.flip-in {
  animation-name: flipIn;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function:linear;
}

.flip-out {
  animation-name: flipOut;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function:linear;
}

.fortune {
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  margin-top: 25px;
}

.fortune-outer {
  color: #270722;
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
  border: #270722 3px solid;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border-radius: 3.5px;
  position: relative;
  overflow: hidden;
}

.emblem {
  margin: 0 auto;
  font-size: 6em;
  height: 125px;
  width: 125px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.card-flair {
  height: 15px;
  width: 15px;
  background: #270722;
  position: absolute;
  border-radius: 50%;
}

.flair-top-left {
  top: 10px;
  left: 10px;
}

.flair-top-right {
  top: 10px;
  right: 10px;
}

.flair-bottom-left {
  bottom: 10px;
  left: 10px;
}

.flair-bottom-right {
  bottom: 10px;
  right: 10px;
}

.luck {
  /* font-family: 'Abril Fatface', cursive; */
}

.reading {
  /* font-family: 'Josefin Sans', cursive; */
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
