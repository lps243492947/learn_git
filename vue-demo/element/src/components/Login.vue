<template>
    <div class="login">
        <div class="container">
            <p class="title">后台管理系统</p>
            <div class="msg mt20">
              <el-input v-model="user" placeholder="请输入内容"></el-input>
            </div>
            <div class="msg mt20">
              <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
            </div>
            <div class="btn mt20">
              <el-button type="primary" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.user && this.password) {
        // 将数据缓存到浏览器
        localStorage.setItem('userName', this.user)
        // 字符串
        // this.$router.push('/main')
        // 对象
        // this.$router.push({path: '/main'})
        // 编程式跳转
        this.$router.push({name: 'Main', params: {userId: 1}})
      }
    }
  }
}
</script>

<style scoped>
.login{
  width: 100%;
}
.container{
  width: 300px;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 0 0 20px #cac6c5;
  padding: 50px;
  margin-top: 150px;
}
.title{
  font-size: 26px;
  font-weight: bold;
  color: #505458;
}
.btn>button{
  width: 100%;
}
.mt20{
  margin-top: 20px;
}
</style>
