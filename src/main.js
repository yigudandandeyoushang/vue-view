// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Apple from './components/apple'
import Banan from './components/banan'

Vue.use(VueRouter)
// Vue.config.productionTip = false
let router = new VueRouter({//实例化router
  mode:'history',
  routers:[
    {
      path:'/apple',
      component: Apple//引入组件
    },
    {
      path:'/banan',
      component:Banan
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
