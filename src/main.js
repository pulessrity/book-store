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
Vue.prototype.$typeOf=(v)=>Object.prototype.toString.call(v)
axios.defaults.baseURL = 'http://localhost:3000/staff/';
Vue.use(ElementUI);
Vue.config.silent = true
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
      let Redo=false
      state.shopping_cart.forEach((x,i,a)=>{
        if(x._id==obj._id){
          Redo=true
          state.shopping_cart[i]=obj
          localStorage.shopping_cart=JSON.stringify(state.shopping_cart)
          console.log(state.shopping_cart[i])
        }
      })
      if(Redo){
        return false;
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
