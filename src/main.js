// 入口文件
// 引入第三方插件
// Vue文件
import Vue from 'vue';
// VueResource插件，为了实现Ajax请求
import VueResource from 'vue-resource';
// 按需引入Mint-UI中的功能
import { Header } from 'mint-ui';
// 引入MUI框架的css（样式）文件
// import './lib/mui/css/mui.min.css'
// 引入MUI中扩展图标的css（样式）文件
// import './lib/mui/css/icons-extra.css'
// 引入bootstrap文件
import 'bootstrap/dist/css/bootstrap.css';
// import jquery from 'jquery';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';


// 引入自己的文件
// 大盒子
import app from './App.vue';
// 路由分发的js文件
import router from './router.js';
import './base.css';


var vm = new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(app);
  },
  router
})