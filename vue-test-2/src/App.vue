<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template> -->

<template>
  <div id="app">
    <component-a @my-event="onCompaMyEvent"></component-a>
  </div>
</template>

<script>
import componentA from './components/a'
export default {
  components: {
    componentA
  },
  methods: {
    onCompaMyEvent: function (param) {
      console.log(param)
    },
    testTest: function () {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



