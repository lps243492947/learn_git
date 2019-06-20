<template>
  <div class="container">{{sendMsg}}{{sendData}}{{sendAge}}</div>
</template>

<script>
export default {
  name: 'demoChild1',
  props: {
    sendMsg: {
      type: String,
      require: true
    },
    sendData: {
      type: String,
      require: true
    },
    sendAge: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      
    }
  }
}
</script>