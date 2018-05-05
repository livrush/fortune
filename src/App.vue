<template>
  <div id="app" v-bind:style="dynamicStyle">
    <header class="header" v-bind:style="headerStyle">
      <h1><a href="/">Fortune</a></h1>
    </header>
    <h1 class="lower-header">Fortune</h1>
    <router-view :themeColors="themeColors"/>
    <a href="http://pafiu.me" target="_blank">
      <div class="logo">
        <img class="svg" src="./assets/milk.svg" alt="Milk logo">
      </div>
    </a>
  </div>
</template>

<script>
import $ from 'jquery';

const colors = require('pafiume-colors');

const color1 = colors.random();
const color2 = colors.random();

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
  mounted() {
    const { themeColors } = this;
    const color = themeColors[0].hues[3];
    $('img.svg').each((index, element) => {
      const $img = $(element);
      const imgClass = $img.attr('class');
      const imgURL = $img.attr('src');
      $.get(imgURL, (data) => {
        let $svg = $(data).find('svg');
        $svg = $svg.attr('class', `${imgClass} replaced-svg`);
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
        $('.svg rect').css({ stroke: color });
        $('.svg path').css({ stroke: color });
        $('.svg circle').css({ fill: color });
        $('.svg ellipse').css({ fill: color });
      }, 'xml');
    });
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
  height: 100vh;
  width: 100vw;
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

a {
  color: inherit;
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

.logo {
  align-items: center;
  bottom: 20px;
  border-radius: 100%;
  box-sizing: border-box;
  display: flex;
  height: 7.5vh;
  justify-content: center;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 7.5vh;
}

.logo .svg {
  height: 100%;
}
</style>
