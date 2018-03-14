import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//引入加载mockServer
import './mock/MockServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
