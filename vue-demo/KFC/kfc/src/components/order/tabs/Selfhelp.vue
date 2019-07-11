<template>
  <div class="text">
    <div class="txt">
      <p>此处空空如也</p>
      <p>还没有发现任何订单呢~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selfhelp'
};
</script>

<style scoped>
.text {
  display: flex;
  text-align: center;
}
.txt {
  color: #808080;
  font-weight: 100;
  padding-top: 40px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>
