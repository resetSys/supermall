import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import LazyLoad from "vue-lazyload"
//导入toast文件夹中的index.js
import Toast from "./components/common/toast"

import FastClick from "fastclick"
//安装toast插件
Vue.use(Toast)
Vue.use(LazyLoad,{

})
//使用fastClick
FastClick.attach(document.body)

Vue.config.productionTip = false
//添加事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
