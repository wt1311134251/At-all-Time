import Vue from 'vue'
import Router from 'vue-router'
//引入Home页面
import Home from "../components/Home/Home"
//引入person我的页面
import Person from "../components/person/Person"
//引入info页面
import Info from "../components/person/info"
//引入setsex页面
import Setsex from "../components/person/setsex"
//引入class页面
import Class from "../components/person/class"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/person"
    },
    {
      path:"/person",
      name:"Person",
      component:Person
    },
    {
      path:"/info",
      name:"info",
      component: Info
    },
    {
      path:"/setsex",
      name:"setsex",
      component:Setsex
    },
    {
      path:"/class",
      name:"class",
      component:Class
    }
  ]
})
