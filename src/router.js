import Vue from 'vue';
// 引入vue-router插件，为了实现路由分发功能
import VueRouter from 'vue-router'

import index from './page/index.vue';
import webMessage from './page/index/webMessage.vue';
import adminMessage from './page/index/adminMessage.vue';

import content from './page/content.vue';
import bannerManage from './page/content/bannerManage.vue';
import contentManage from './page/content/contentManage.vue';
import wordsManage from './page/content/wordsManage.vue';

import user from './page/user.vue';
import userManage from './page/user/userManage.vue';

import about from './page/about.vue';

Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/index'},
    {
      path:'/index',
      component:index,
      children:[
        {path:'webMessage',component:webMessage},
        {path:'adminMessage',component:adminMessage}        
      ]
    },
    {
      path:'/content',
      component:content,
      children:[
        {path:'bannerManage',component:bannerManage},
        {path:'contentManage',component:contentManage},
        {path:'wordsManage',component:wordsManage}
      ]
    },
    {
      path:'/user',
      component:user,
      children:[
        {path:'userManage',component:userManage}
      ]
    },
    {path:'/about',component:about}
  ],
  linkActiveClass: 'active'
})

// 把路由对象暴露出去
export default router