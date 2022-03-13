import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false;
Vue.use(AsyncComputed);

let data = {
  numButtonsClicked: 0,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
