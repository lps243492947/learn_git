<template>
  <div class="container">
    <child :send-msg="message" :send-data="data" :send-age="age"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'demo1',
  data () {
    return {
      message: 'NM$L',
      data: '2019-6-11',
      age: 18
    }
  },
  components: {
    child
  }
}
</script>