import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld.vue')
const booklist = () => import('@/components/list.vue')
const shopcart = () => import('@/components/shopcart.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'list',
      component: booklist
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    }
  ]
})
