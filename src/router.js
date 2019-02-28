import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import CreateCustomer from '@/components/CreateCustomer.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/customer/:id',
      name: 'customer',
      component: CreateCustomer
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
