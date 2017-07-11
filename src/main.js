
import Vue from 'vue'
import App from './App'
import router from './router'
import  store from "./store"
import VueResource from 'vue-resource'
import './assets/jquery-1.10.1'
import Header from '@/components/public/Header.vue'
import CartList from "@/components/cart/cartlist.vue"
import Orderconter from "@/components/order/orderconter.vue"
import Myorderconter from "@/components/order/myorderconter.vue"
import user from './components/User/user'
import Footer from './components/public/Footer'
import List from './components/List/index'
import Listxq from './components/List/listxq'
import Detail from "./components/Detail/index"
import Details from "./components/Detail/details"
import Asscess from "./components/Detail/asscess"

import { Swipe, SwipeItem } from 'mint-ui';
import { Toast } from 'mint-ui';

Vue.component("v-header",Header)
Vue.component("v-cartlist",CartList)
Vue.component("v-orderconter",Orderconter)
Vue.component("v-myorderconter",Myorderconter)
Vue.component(Toast.name, Toast);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component("v-user",user);
Vue.component("v-footer",Footer);
Vue.component("index",List);
Vue.component("listxq",Listxq);
Vue.component("pro-detail",Detail);
Vue.component("my-details",Details);
Vue.component("my-asscess",Asscess);
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
