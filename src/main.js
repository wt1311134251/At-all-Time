// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入store
import store from "./store"
//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';
//引入 rem
import rem from "../static/js/rem"

//图片懒加载  vant 功能
import { Lazyload } from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);

Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
