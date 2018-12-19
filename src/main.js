import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '@/assets/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/flex.js'

Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
