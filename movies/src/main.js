import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import Cookie from 'js-cookie'

Vue.config.productionTip = false
window.Cookie = window.Cookie || Cookie;
Vue.prototype.$_Cookie = Cookie;


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
