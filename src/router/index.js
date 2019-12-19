import Vue from 'vue'
import Router from 'vue-router'
//引入Home页面
// 引入Home页面
import Home from "../components/Home/Home"


Vue.use(Router);
//引入课程详情
import Teacher from "../components/Index/Teacher";
//引入 index组件
import Index from "../components/Index/Index";
//引入 Course 组件
import Course from "../components/Course/course";
//引入 Person 组件
import Person from "../components/person/Person";
//引入 Practise组件
import Practise from "../components/Practise/practise"
//引入 Record 组件
import Record from "../components/Record/record";


import Record from '../components/Record/record'
import Oto from '../components/Record/oto'
import Search from '../components/Record/Search'
import Otop from '../components/Record/oto-plan'
Vue.use(Router)

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
      component:Class,
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
      component:Otop,
      component: Home,
      redirect:"/index",
      children:[
        //首页
        {
          path:'index',
          name:"index",
          component:Index,
        },
        //课程
        {
          path:'course',
          name:"course",
          component:Course,
        },
        // 我的
        {
          path:'person',
          name:"person",
          component:Person,
        },
        //  练习
        {
          path:'practise',
          name:"practise",
          component:Practise
        },
        // 约课记录
        {
          path:'record',
          name:'record',
          component:Record
        }
      ]

    }
  ]
})
