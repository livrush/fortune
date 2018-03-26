<template>
  <div id="app" v-bind:style="dynamicStyle">
    <!-- <img src="./assets/logo.png"> -->
    <h1>Fortune</h1>
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
      return color1;
    },
    dynamicStyle() {
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 75px 0;
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
</style>
