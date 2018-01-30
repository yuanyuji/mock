<template>
  <div class="hollo">
    <header><router-link to="/"><i class="fa fa-angle-left"></i></router-link>京东登录<span>&nbsp;&nbsp;</span></header>
    <section>
      <div class="nav">
        <ul>
          <li>账号密码登录</li>
          <li>短信验证码登录</li>
        </ul>
        {{ userInfo !== null ? userInfo.name : "请登录" }}
        <label>账户<input type="text" ref="name" placeholder="用户名/邮箱/已验证手机"></label>
        <label>密码<input type="password" ref="pwd" placeholder="请输入密码"></label>    
        <label><button @click="submit">登录</button></label>  
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default{
  name: 'login',
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    submit () {
      const userName = this.$refs.name.value
      const pwd = this.$refs.pwd.value
      const all = {
        userName,
        pwd
      }
      axios
        .post('/api/login', {
          userName,
          pwd
        })
        .then(res => {
          res.data.data.code === 0
            ? (this.userInfo = res.data.data.data)
            : (this.userInfo = null)
          // userName === '' ? this.userInfo = null : userName
        })
      window.localStorage['userName'] = JSON.stringify(all)
    }
  }
}
</script>
<style scoped>
header{
  width: 100%;
  text-align: center;
  color: #000;
  font-weight: bold;
  background: #f9f9f9;
  border-bottom: 1px solid #ccc
}
header i{
  margin: auto .1rem
}
.nav ul{
  display: flex;
  justify-content: space-around;
  padding: 0 .1rem;
  line-height: .4rem;
  border-bottom: 1px solid #ccc
}
.nav ul li{
  text-align: center;
}
label{
  display: block;
  height:  .4rem;
  line-height: .4rem;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #ccc  
}
label input{
  border-width: 0;
  padding-left: .2rem
}
label button{
  width: 100%;
  height: 100%;
  border-width: 0;
  background: #eee
}
</style>
