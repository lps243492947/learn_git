<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
      <div class="user-info">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{userName}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  computed: {
    userName () {
      return localStorage.getItem('userName')
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #4091ff;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
}
.logo {
  float: left;
  width: 250px;
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
</style>
