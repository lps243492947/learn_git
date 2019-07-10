<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.vue-toast{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  border: 1px solid green;
  color: green;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
}
.vue-toast.toast-top{
  top: 20px;
}
.vue-toast.toast-center{
  top: 50%;
  transform: translateY(-50%);
}
.vue-toast.toast-bottom{
  bottom: 20px;
}

</style>
