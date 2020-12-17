import 'babel-polyfill'
import 'amfe-flexible';
import Vue from 'vue'
import App from './App'

import VueRouter from "vue-router"
import Vuex from 'vuex'
//import mui from './plugins/mui'
//import ontouch from './plugins/ontouch'
import Store from './vuex/store'
import routers from './routerconfig/routers'
import commonfunc from './js/common'
import {
  List,
  Tab,
  Tabs,
  Cell,
  CellGroup,
  Panel /* ,ImagePreview */ ,
  Field,
  Button,
  Toast,
  Search,
  Tag,
  Swipe,
  SwipeItem,
  Lazyload,
  Sticky,
  Notify,
  Image as VanImage,
  Icon,
  Loading
} from 'vant';




//import MintUI from 'mint-ui'

//import 'mint-ui/lib/style.css'

//Vue.use(MintUI)
console.log(process);
Vue.use(Vuex)
//Vue.use(mui)
Vue.use(VueRouter);
//Vue.use(ontouch);
Vue.use(List)
  .use(Tab)
  .use(Tabs)
  .use(Cell)
  .use(CellGroup)
  .use(Panel) /* .use(ImagePreview) */
  .use(Field)
  .use(Button)
  .use(Toast)
  .use(Search)
  .use(Tag)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Sticky)
  .use(Notify)
  .use(VanImage)
  .use(Icon)
  .use(Loading);
console.log(process.env.VUE_APP_BUILD_TYPE);

var pageconfig = {
  uniacid : 3,
  wsurl : "",
  sharetitle: "",
  sharedesc: "",
  shareimgUrl: "",
  attachurl: "",
  appid: "",
  wxurl: "",
}

Vue.prototype.$commonfunc = commonfunc;//自定义公共方法
Vue.prototype.pageconfig = pageconfig;
Vue.prototype.$toast = Toast;
Vue.prototype.$notify = Notify;

if(process.env.VUE_APP_BUILD_TYPE == "rzlive"){
  Vue.prototype.pageconfig = {
    uniacid : 7,
    wsurl : "",
    sharetitle: "",
    sharedesc: "",
    shareimgUrl: "",
    attachurl: "",
    appid: ""
  };
}

const store = new Vuex.Store(Store)
const router = new VueRouter({
  //mode: 'hash',
  base: __dirname,
  routes: routers,
})
var vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  from.meta.scrollY = window.scrollY
  Object.assign(to.meta, to.params, to.query);
  next()
})
router.afterEach(route => {
  if (route.meta.scrollY) {
    setTimeout(function() {
      window.scrollTo(0, route.meta.scrollY)
    }, 0)
  } else {
    window.scrollTo(0, 0)
  }
})


import wxApi from './plugins/shareConfig.js'
import $ from 'jquery'

//const wxSdk = require('./plugins/shareConfig.js')($);
