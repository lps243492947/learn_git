<template>
  <div class="look">
    {{message}}
    <p>接收的参数: {{$route.name}}</p>
  </div>

</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      message: '看你好帅！'
    }
  }
}
</script>
