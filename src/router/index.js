import Vue from 'vue'
import Router from 'vue-router'
//引入Home页面
import Home from "../components/Home/Home"


import Record from '../components/Record/record'
import Oto from '../components/Record/oto'
import Search from '../components/Record/Search'
import Otop from '../components/Record/oto-plan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Record
    },
    {
      path:'/oto',
      name:'oto',
      component:Oto
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/oto-plan',
      name:'oto-plan',
      component:Otop
    }
  ]
})
