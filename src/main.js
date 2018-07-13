// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: '../static/img/jdloading.gif',
  loading: '../static/img/jdloading.gif',
  attempt: 1
})

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
