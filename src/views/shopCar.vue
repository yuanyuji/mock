<template>
  <div class="hello">
    <header><router-link to="/"><i class="fa fa-angle-left"></i></router-link> 购物车<i class="fa fa-comment-o"></i></header>
    <section>
      <div class="shopCar" v-for="(i, ind) in lists" v-bind:key="ind">
        <dl>
          <dt><img :src="i.image" alt=""></dt>
          <dd><p>{{i.name}}</p><p>{{i.price}}</p></dd>
        </dl>
      </div>
      <button @click="buy">加购</button>
    </section>
  </div>
</template>
<script>
import { setCookie } from '../utils/cookies'
export default {
  name: 'shopCar',
  methods: {
    buy () {
      setCookie('user', this.$route.params.image, 0.1)
    }
  },
  computed: {
    lists () {
      // setCookie('user', this.$route.params.image, 0.1)
      return JSON.parse(localStorage.getItem('lists'))
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
}
header i{
  margin: auto .1rem
}
</style>

