 //引入 vue
 import  Vue from "vue"

 //引入vuex
 import vuex from "vuex"
 //引入login。js
 import Login from './login';
 //挂载
 Vue.use(vuex);
//引入本地存储
 import VuexPersistence from 'vuex-persist';
 const vuexLocal = new VuexPersistence({
   storage: window.localStorage
 })
 //创建store
 export default new vuex.Store({
   plugins: [vuexLocal.plugin],
       modules:{
         Login
       },
        state:{
          title:"msmk"
        }
 })
