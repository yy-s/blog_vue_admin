<template>
  <div>
    <div class="aside">
      <ul>
        <li class="title">用户管理</li>
        <li>
          <router-link to="/user/userManage">用户列表</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  }
}
</script>
<style lang="less" scoped>
  
</style>