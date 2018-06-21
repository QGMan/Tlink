// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入element-ui
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Elementui)


// 引入axios
import axios from 'axios'
Vue.prototype.$http=axios

// 引入jquery及相关配置
import $ from "jquery"

// 引入公共样式
import '../static/css/common.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
