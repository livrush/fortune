<template>
  <div class="fortune">
    <div class="fortune-outer" v-bind:style="{ background: color1, color: color2 }">
      <div class="fortune-inner" v-bind:style="{ 'border-color': color2 }">
        <div class="card-flair flair-top-left" v-bind:style="{ background: color2 }"></div>
        <div class="card-flair flair-top-right" v-bind:style="{ background: color2 }"></div>
        <div class="card-flair flair-bottom-left" v-bind:style="{ background: color2 }"></div>
        <div class="card-flair flair-bottom-right" v-bind:style="{ background: color2 }"></div>
        <div id="emblem" class="emblem">
          <emblem-normal :themeColors="themeColors" />
        </div>
        <h2 class="luck">{{ luck }} Luck</h2>
        <hr>
        <div class="reading">{{ verb }} {{ group }}</div>
        <p></p>
        <div class="reading">Lorem ipsum dolor amet dreamcatcher kinfolk thundercats bespoke biodiesel four loko.</div>
        <div class="reading">Mustache green juice helvetica.</div>
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
} from '../groups';

import EmblemGood from './EmblemGood';
import EmblemNormal from './EmblemNormal';
import EmblemBad from './EmblemBad';

const luckType = pullRandom(luck);
let emblemType;

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

export default {
  name: 'HelloWorld',
  props: {
    themeColors: Array,
  },
  components: {
    'emblem-normal': emblemType,
  },
  data() {
    const { themeColors } = this;
    return {
      luck: luckType,
      verb: pullRandom(verbs),
      group: pullRandom(groups),
      color1: themeColors[0].hues[3],
      color2: themeColors[1].hues[1],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes spinAround {
  1% {
    transform: rotate3d(0, 5, 1, 0deg);
  };
  100% {
    transform: rotate3d(0, 5, 1, 1turn);
  };
}

.fortune {
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
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
