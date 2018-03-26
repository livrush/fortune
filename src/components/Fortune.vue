<template>
  <div class="fortune">
    <h1>Fortune</h1>
    <div class="fortune-outer" v-bind:style="{ background: color1, color: color2 }">
      <div class="fortune-inner" v-bind:style="{ 'border-color': color2 }">
        <div class="card-flair flair-top-left" v-bind:style="{ background: color2 }"></div>
        <div class="card-flair flair-top-right" v-bind:style="{ background: color2 }"></div>
        <div class="card-flair flair-bottom-left" v-bind:style="{ background: color2 }"></div>
        <div class="card-flair flair-bottom-right" v-bind:style="{ background: color2 }"></div>
        <div class="emblem" v-bind:style="{ background: color2, color: color1 }">

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
  colors,
} from '../groups';

const color1 = pullRandom(colors);
const color2 = pullRandom(colors);

// $('body').css('background', color1.hues[2]);

export default {
  name: 'HelloWorld',
  props: {
    themeColors: Object,
  },
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
  background: #270722;
  margin: 0 auto;
  font-size: 6em;
  height: 125px;
  width: 125px;
  border-radius: 50%;
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
