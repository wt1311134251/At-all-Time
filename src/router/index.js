import Vue from 'vue'
import Router from 'vue-router'
//引入Home页面
// import Home from "../components/Home/Home"
import Course from "../components/Course/course.vue"
import Courtow from "../components/Course/coureXiang.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Course',
      name: 'Course',
      component: Course
    },
    {
      path: '/',
      name: 'Courtow',
      component: Courtow
    }
  ]
})
