// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource' 
import store from './store/index'

// import './assets/css/mui.css'
// import './assets/fonts/mui.ttf'
// import './assets/css/test.css'
// import './assets/js/mui.js'

// import './assets/fonts/iconfont.eot'
// import './assets/fonts/iconfont.ttf'
// import './assets/fonts/iconfont.woff'
// import './assets/fonts/iconfont.svg'

import './assets/css/bs-font.css'
Vue.use(Vuex);
Vue.use(MintUI);
Vue.use(VueResource);
Vue.config.silent = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
