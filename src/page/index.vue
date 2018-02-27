<template>
  <div>
    <div class="aside">
      <ul>
        <li class="title">首页</li>
        <li>
          <router-link to="/index/webMessage" @click="show">网站信息</router-link>
        </li>
        <li>
          <router-link to="/index/adminMessage">管理员信息</router-link>
        </li>
      </ul>
    </div>
    <div class="content" >
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods:{
    show(){
      console.log(123);
    }
  }
}
</script>
<style lang="less" scoped>
  // .aside {
  //   position: fixed;
  //   left: 0;
  //   top: 0;
  //   width: 160px;
  //   height: 100%;
  //   z-index: -1;
  //   background-color: #393D49;
  //   padding-top: 80px;
  //   ul {
  //     width: 100%;
  //     height: 100%;
  //     li[data-v-3810a66a] {
  //       color: #ddd;
  //       width: 100%;
  //       font-size: 18px;
  //       a {
  //         padding-left: 50px;
  //         line-height: 35px;
  //         margin-top: 5px;
  //         color: #ddd;
  //       }
  //       &.title {
  //         background-color: #2B2E37;
  //         line-height: 50px;
  //         color: #fff;
  //         padding-left: 10px;
  //         margin-left: 0;
  //         margin-bottom: 15px;
  //       }
  //     }
  //   }
  // }
</style>