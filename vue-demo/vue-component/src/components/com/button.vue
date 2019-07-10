<template>
  <!-- 类名取决于传进来的值、是否可点击看父组件传进来的值-->
  <button @click="handle" :class="'i-button-size' + size" :disabled="disabled">
    <!-- 插槽:用于调用组件时给组件添加东西 -->
    <!-- 不具名插槽 -->
    <slot></slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    //   如果value与validList中某一项相等 就返回true
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
import bus from "@/common/bus";
import { truncate } from "fs";
export default {
  // 父组件传进来的值
  props: {
    size: {
      // 校验参数是否是传进来的参数
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      //type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: "我是button里的数据"
    };
  },
  methods: {
    handle() {
      // 使用todo的方法抛出msg
      bus.$emit("todo", this.msg);
    }
  }
};
</script>

<style scoped>
button{
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    background-color:floralwhite;
    color:coral;
}
.i-button-sizelarge{
    padding: 12px;
}
.i-button-sizedefault{
    padding:8px;
}
.i-button-sizesmall{
    padding: 4px;
}
</style>
