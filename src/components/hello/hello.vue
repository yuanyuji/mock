<template>
  <div>
    <div class="con">
      <dl v-for="(i,ind) in list" v-bind:key="ind">
        <router-link tag="dt" :to="{name:'shopCar', params:{image:i.image,name:i.name,price:i.price}}"><img :src="i.image" alt=""></router-link>
        <dd><p class="img">{{i.name}}</p><p class="ccc"><span>{{i.price}}</span><a>看相似</a></p></dd>
      </dl>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.post('/api/list')
    .then((res) => {
      this.list = res.data.data
      window.localStorage.setItem('lists', JSON.stringify(this.list))
    })
  }
}
</script>
