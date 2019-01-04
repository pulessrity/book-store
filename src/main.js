import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '@/assets/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/flex.js'
import  axios from 'axios'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.prototype.$http=axios
axios.defaults.baseURL = 'http://67.218.142.198:3000/staff/';
Vue.use(ElementUI);
const store = new Vuex.Store({
  state: {
    count: 0,
    keys:null,
    user_info:null,
    isLogin:false,
    shopping_cart :localStorage.shopping_cart?JSON.parse(localStorage.shopping_cart):[]
  },
  mutations: {
    addcartAndSaving(state,obj){
    for(let y of state.shopping_cart){
        if(y._id==obj._id){
          console.log('has key!')
          return false
        }
      }
    state.shopping_cart.push(obj)
    localStorage.shopping_cart=JSON.stringify(state.shopping_cart)
    console.log(state.shopping_cart)
    return true
    },
    m(state,obj){
      for(let k in obj){
     if(Reflect.has(state,k)){
        state[k]=obj[k]
       console.log('set value!')
     }else {
       throw new Error('vuex has not this value !')
     }
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
