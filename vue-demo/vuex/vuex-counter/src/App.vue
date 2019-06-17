<template>
  <div id="app">
    <counter />
    <counter-brother/>
  </div>
</template>

<script>
// 两个组件都要用到count状态，怎么办?
import Counter from './components/counter'
import CounterBrother from './components/CounterBrother'
export default {
  name: 'App',
  methods: {
  },
  components: {
    'counter': Counter,
    'counter-brother': CounterBrother
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
