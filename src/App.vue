<template>
  <div id="app" v-bind:style="dynamicStyle">
    <header class="header" v-bind:style="headerStyle">
      <h1>Fortune</h1>
    </header>
    <h1 class="lower-header">Fortune</h1>
    <router-view :themeColors="themeColors"/>
  </div>
</template>

<script>

import {
  pullRandom,
  colors,
} from './groups';

const color1 = pullRandom(colors);
const color2 = pullRandom(colors);

export default {
  name: 'app',
  computed: {
    themeColors() {
      return [color1, color2];
    },
    dynamicStyle() {
      return {
        background: color2.hues[1],
        color: color1.hues[3],
      };
    },
    headerStyle() {
      return {
        background: color1.hues[3],
        color: color2.hues[1],
      };
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* padding: 75px 0; */
  height: 100vh;
  width: 100vw;
  background: blue;
  font-family: 'Josefin Sans', cursive;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Abril Fatface', cursive;
  margin: 0;
  margin-top: 15px;
}

h1 {
  line-height: 25px;
}

hr {
    border: solid 1.5px;
    width: 100%;
    margin: 10px 0;
}

.header {
  margin-bottom: 25px;
  padding-top: 25px;
  position: relative;
  overflow: hidden;
}

.header h1 {
  margin: 0
}

.lower-header {
  margin-top: -51px;
}
</style>
