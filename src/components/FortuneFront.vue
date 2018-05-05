<template>
  <div class="fortune-outer" v-bind:style="fortuneStyles">
    <div class="fortune-inner" v-bind:style="{ 'border-color': color2 }">
      <div class="card-flair flair top left" v-bind:style="{ background: color2 }"></div>
      <div class="card-flair flair top right" v-bind:style="{ background: color2 }"></div>
      <div class="card-flair flair bottom left" v-bind:style="{ background: color2 }"></div>
      <div class="card-flair flair bottom right" v-bind:style="{ background: color2 }"></div>
      <div id="emblem" class="emblem" v-if="showEmblem">
        <emblem :themeColors="themeColors" />
      </div>
      <h2 class="luck">{{ luck }} Luck</h2>
      <hr>
      <div class="reading">{{ verb }} {{ group }}</div>
      <p></p>
      <div class="reading">{{ fortune }}</div>
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


export default {
  name: 'FortuneFront',
  props: {
    themeColors: Array,
    showEmblem: Boolean,
  },
  components: {
    emblem: emblemType,
  },
  data() {
    const { themeColors } = this;
    console.warn(this.showEmblem);
    return {
      luck: luckType,
      verb: pullRandom(verbs),
      group: pullRandom(groups),
      fortune,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  border-radius: 3.5px;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  padding: 10px;
  position: relative;
  width: 100%;
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
  position: absolute;
  border-radius: 50%;
}

.flair.top {
  top: 10px;
}

.flair.right {
  right: 10px;
}

.flair.bottom {
  bottom: 10px;
}

.flair.left {
  left: 10px;
}
</style>
