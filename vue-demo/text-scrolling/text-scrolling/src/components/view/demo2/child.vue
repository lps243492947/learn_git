<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
export default {
  name: 'demoChild2',
  data () {
    return {
      message: 'NM$L'
    }
  },
  methods: {
    sendMsg () {
      this.$emit('message', this.message)
    }
  },
}
</script>