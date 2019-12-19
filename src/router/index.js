import Vue from 'vue'
import Router from 'vue-router'
//引入Home页面
import Home from "../components/Home/Home"
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
