import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/reset.scss'
import '@/assets/css/global.scss'
// import '@/assets/iconfonts/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
