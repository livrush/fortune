<template>
  <div class="fortune">
    <div class="emblem">G</div>
    <h1 class="luck">Good Luck</h1>
    <hr>
    <div class="reading">Lorem ipsum dolor amet dreamcatcher kinfolk thundercats bespoke biodiesel four loko. Mustache green juice helvetica chartreuse, man bun ramps viral mumblecore leggings gochujang blue bottle raclette sriracha.</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fortune {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  background: #aecd;
  text-align: center;
  padding: 15px;
  height: 350px;
  width: 250px;
  border-radius: 5px;
}

.emblem {
  margin: 0 auto;
  color: #aecd;
  font-size: 6em;
  background: #aeccdd;
  height: 125px;
  width: 125px;
  border-radius: 50%;
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
