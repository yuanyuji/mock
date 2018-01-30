// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/font-awesome.min.css'
import '../static/css/common.css'
import '../static/css/reset.css'
import '../static/css/style.css'
import VueBus from 'vue-bus'
import mock from './mock/mock'
Vue.use(VueBus)
mock.bootstrap()
mock.login()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
