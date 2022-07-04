import Vue from 'vue'
import router from './router'
import i18n from './plugins/i18n'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
