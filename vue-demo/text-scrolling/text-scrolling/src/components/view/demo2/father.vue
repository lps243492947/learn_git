<template>
  <div class="container">
    {{msg}}
    <child @message='getMessage'></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'demoChild2',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    getMessage (data) {
      this.msg = data
    }
  },
}
</script>