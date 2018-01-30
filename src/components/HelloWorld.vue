<template>
  <div class="hello">
    <header><input type="text" placeholder="穿上羽绒服，麻麻再也不用怕我冷"><router-link to="/login">登录</router-link></header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <router-link :to="{name:i.path}" v-for="(i,idx) in title" v-bind:key='idx'>
        <b><i :class="i.ico"></i></b>
        <span>{{i.name}}</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: [
        {
          path: '',
          ico: 'fa fa-home',
          name: '首页'
        },
        {
          path: 'sort',
          ico: 'fa fa-search-plus',
          name: '分类'
        },
        {
          path: 'search',
          ico: 'fa fa-server',
          name: '发现'
        },
        {
          path: 'shopCar',
          ico: 'fa fa-cart-plus',
          name: '购物车'
        },
        {
          path: 'mine',
          ico: 'fa fa-user-o',
          name: '我的'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: #e13032;
  padding: 0 .1rem
}
header a{
  color: #fff;
}
</style>
