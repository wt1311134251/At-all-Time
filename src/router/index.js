import Vue from 'vue'
import Router from 'vue-router'
//引入Home页面
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
