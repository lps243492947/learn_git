<template>
  <div class="sidebar">
    <div class="sidebar-con" :class="{showbar: showSidebar}">
      <div class="navbar_left" @click="backTo">
        <img src="../pages/mine/zuo.png" alt="">
      </div>
        <van-tree-select :height="850" :items="items" :main-active-index="mainActiveIndex" :active-id="activeId" @navclick="onNavClick" @itemclick="onItemClick"/>
    </div>
  </div>
</template>

<script>
import { TreeSelect } from 'vant';
import { mapGetters } from 'vuex';
export default {
data() {
    return {
      items:[
    {
    text: '北京市',
    children: [
      {
        text: '北京市',
        id: 110100,
      }
      ]
    },
    {
    text: '天津市',
    children: [
      {
        text: '天津市',
        id: 120100,
      }
      ]
    },
      {
    text: '河北省',
    children: [
      {
        text: '石家庄市',
        id: 130100,
      },
      {
        text: '唐山市',
        id: 130200,
      },
      {
        text: '秦皇岛市',
        id: 130300,
      },
      {
        text: '邯郸市',
        id: 130400,
      },
            {
        text: '邢台市',
        id: 130500,
      },
      {
        text: '保定市',
        id: 130600,
      },
      {
        text: '张家口市',
        id: 130700,
      },
      {
        text: '承德市',
        id: 130800,
      },
            {
        text: '沧州市',
        id: 130900,
      },
      {
        text: '廊坊市',
        id: 131000,
      },
      {
        text: '衡水市',
        id: 131100,
      }
      ]
    },
    {
    text: '山西省',
    children: [
      {
        text: '太原市',
        id: 140100,
      },
      {
        text: '大同市',
        id: 140200,
      },
      {
        text: '阳泉市',
        id: 140300,
      },
      {
        text: '长治市',
        id: 140400,
      },
            {
        text: '晋城市',
        id: 140500,
      },
      {
        text: '朔州市',
        id: 140600,
      },
      {
        text: '晋中市',
        id: 140700,
      },
      {
        text: '运城市',
        id: 140800,
      },
            {
        text: '忻州市',
        id: 140900,
      },
      {
        text: '临汾市',
        id: 141000,
      },
      {
        text: '吕梁市',
        id: 141100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
    {
    text: '江西省',
    children: [
      {
        text: '南昌市',
        id: 360100,
      },
      {
        text: '景德镇市',
        id: 360200,
      },
      {
        text: '萍乡市',
        id: 360300,
      },
      {
        text: '九江市',
        id: 360400,
      },
            {
        text: '新余市',
        id: 360500,
      },
      {
        text: '鹰潭市',
        id: 360600,
      },
      {
        text: '赣州市',
        id: 360700,
      },
      {
        text: '吉安市',
        id: 360800,
      },
            {
        text: '宜春市',
        id: 360900,
      },
      {
        text: '抚州市',
        id: 361000,
      },
      {
        text: '上饶市',
        id: 361100,
      }
      ]
    },
  ],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    };
  },
  computed: {
    ...mapGetters([
      'showSidebar'
    ])
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
      this.$emit('active', data.text)
      this.$store.dispatch('setShowSidebar', false)
    },
    backTo(){
      this.$store.dispatch('setShowSidebar', false)
    },
  }
}
</script>

<style scoped>
.sidebar-con {
  position: absolute;
  top: 0;
  left: -400px;
  transform: translateZ(0);
  opacity: 0;
  width: 100%;
  z-index: 1002;
  height: 100%;
  overflow: auto;
  transition: all 0.3s ease;
}
.showbar {
  transform: translateX(400px);
  opacity: 1;
}
.navbar_left {
  background-color: #da3a35;
}
.navbar_left img {
  width: 25px;
  height: 25px;
  margin-left: 3vw;
  margin-top: 5px;
}
</style>
