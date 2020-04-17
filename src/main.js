// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
import store from './store/index'
import axios from 'axios'
import Qs from 'qs'
import { Swipe, SwipeItem, Field, Icon, Picker, Popup, RadioGroup, Radio, Toast, Dialog, List, Area, CellGroup, Form, Uploader } from 'vant'

Vue.use(less).use(Swipe).use(SwipeItem).use(Field).use(Icon).use(Picker).use(Popup).use(RadioGroup).use(Radio).use(Uploader)
  .use(Toast).use(Dialog).use(List).use(Area).use(CellGroup).use(Form)
Vue.use(axios);
Vue.prototype.qs = Qs;
let token = '';
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  token = localStorage.getItem('token');
  config.headers.common['access_token'] = token;
  // console.log('token:   '+token);
  //console.dir(config);
  return config;
}, function (error) {
  // Do something with request error
  console.info("error: ");
  console.info(error);
  return Promise.reject(error);
});
/*axios.interceptors.response.use(function (response) {
  if ( response.data.code ) {
    if (parseInt(response.data.code) === -101 || parseInt(response.data.code) === -102) {
      //未登录
      console.log('登录失效，跳转登录页');
      //    显示toast
      router.push('/login');
      
    }
    if (parseInt(response.data.code) === -1) {
    
    }
  }
  return response;
}, function (error) {
  // Do something with response error
  console.dir(error);
  console.log('服务器请求超时');
  return Promise.reject(error);
});*/
router.beforeEach((to, from, next) => {
  /*  路由发生变化修改页面title */
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
