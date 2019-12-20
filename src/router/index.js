import Vue from 'vue'
import Router from 'vue-router'
//引入Home页面

import Home from "../components/Home/Home"

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
//引入 info 组件
import Info from '../components/person/info'
//引入setsex组件
import Setsex from '../components/person/setsex'
//引入Class组件
import Class from '../components/person/class'
import Xiang from '../components/Course/coureXiang.vue'
// <<<<<<< HEAD
// import Record from '../components/Record/record'
// =======

import Oto from '../components/Record/oto'
import Search from '../components/Record/Search'
import Otop from '../components/Record/oto-plan'
//引入concern页面（关注的老师）
import Concern from '../components/person/concer'
//引入 collect 页面（我的收藏）
import Collect from '../components/person/collect'
//引入登录页面
import Login from '../components/person/login'

Vue.use(Router);
//引入订单页面
import Dan from '../components/person/dan';
//引入退出登录页面
import Exit from '../components/person/exit';
//引入更改密码页面
import SETnew from '../components/person/set-new-pass';
export default new Router({

  routes: [
    {
      path:"/coureXiang",
      name:"coureXiang",
      component:Xiang
    },
    {
      path:"/concern",
      name:"concern",
      component:Concern
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/collect",
      name:"collect",
      component:Collect
    },
  {
      path:'/teacher',
      name:'teacher',
      component:Teacher
    },
    {
      path:'/xiang',
      name:'Xiang',
      component:Xiang
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
      path:"/oto-plan",
      name:"oto-plan",
      component:Otop
    },
    {
      path:'/',
      name:'home',
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
        },
        
      ]
    },
    //实验
    {
      path:"/dan/:name",
      name:"dan",
      component:Dan
    },
      //退出登录
    {
      path:"/options",
      name:"exit",
      component:Exit
    },
      //更改密码页面
      {
        path:"/set-new-pass",
        name:"set-new-pass",
        component:SETnew
      },
  ]
  })





