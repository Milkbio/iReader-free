import Vue from 'vue'
import App from './App.vue'
import router from './router/'

import '@/assets/css/reset.scss'
import '@/assets/css/global.scss'
import '@/assets/iconfonts/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
