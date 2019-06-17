<template>
  <div id="app">
    Clicked {{$store.state.count}} times, count is {{evenOrOdd}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="IncrementAsync">IncrementAsync</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  computed: mapGetters(
    ['evenOrOdd']
  ),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'IncrementAsync'
  ]),
  
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
