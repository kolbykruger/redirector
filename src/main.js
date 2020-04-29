import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted() {
      window.scrollTo(0,0)
  },
  render: h => h(App)
}).$mount('#app')
