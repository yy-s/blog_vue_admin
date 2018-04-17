import Vue from 'vue';
// 引入vue-router插件，为了实现路由分发功能
import VueRouter from 'vue-router'

import index from './component/index.vue';
import userList from './component/userList.vue';
import addUser from './component/addUser.vue';
import articleList from './component/articleList.vue';
import articleCommon from './component/articleCommon.vue';
import messageOpact from './component/messageOpact.vue';
import pictureManage from './component/pictureManage.vue';
import pictureOpact from './component/pictureOpact.vue';

Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/index'},
    {path:'/index',component:index},
    {path:'/userList',component:userList},
    {path:'/addUser',component:addUser},
    {path:'/articleList',component:articleList},
    {path:'/articleCommon',component:articleCommon},
    {path:'/messageOpact',component:messageOpact},
    {path:'/pictureManage',component:pictureManage},
    {path:'/pictureOpact',component:pictureOpact}
  ],
  linkActiveClass: 'active'
})

// 把路由对象暴露出去
export default router