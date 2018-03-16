import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import loading from './common/img/default-epet.png'
Vue.use(VueLazyload, {
  loading
})

//引入加载mockServer
import './mock/MockServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
