import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/public/Header.vue'
import Cart from '@/components/cart/cart.vue'
import Address from '@/components/address/address.vue'
import Newaddress from '@/components/address/newaddress.vue'
import Sureorder from '@/components/order/sureorder.vue'
import Myorder from '@/components/order/myorder.vue'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import RegisterM from '@/components/Register-m'
import RegisterNext from '@/components/Register-next'
import Active from '@/components/Active'
import Special from '@/components/Special'
import Setting from '@/components/Setting'
import Search from '@/components/Search'
import Exitaddress from '@/components/address/exitaddress'

import user from '@/components/User/user'
import Footer from '@/components/public/Footer'
import List from '@/components/List/index'
import Listxq from '@/components/List/listxq'
import Detail from '@/components/Detail/index'
import Details from '@/components/Detail/details'
import Asscess from '@/components/Detail/asscess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/exitaddress',
      name: 'exitaddress',
      component: Exitaddress
    },
    {
      path: '/register-m',
      name: 'register-m',
      component: RegisterM
    },
    {
      path: '/register-next',
      name: 'register-next',
      component: RegisterNext
    },
    {
      path: '/active',
      name: 'active',
      component: Active
    },
    {
      path: '/special',
      name: 'special',
      component: Special
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/header',
      name: 'my-header',
      component: Header
    },
    {
      path: '/footer',
      name: 'my-footer',
      component: Footer
    },
    {
      path: '/list',
      name: 'index',
      component: List
    },
    {
      path: '/listxq',
      name: 'listxq',
      component: Listxq
    },
    {
      path: '/detail',
      name: 'pro-detail',
      component: Detail
    },
    {
      path: '/details',
      name: 'my-details',
      component: Details
    },
    {
      path: '/asscess',
      name: 'my-asscess',
      component: Asscess
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/newaddress',
      name: 'newaddress',
      component: Newaddress
    },
    {
      path: '/sureorder',
      name: 'sureorder',
      component: Sureorder
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: Myorder
    }
  ]
})
