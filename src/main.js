import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading:require('./common/img/default-epet.jpg')
})
Vue.use(MintUI)

//引入加载mockServer
import './mock/MockServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
