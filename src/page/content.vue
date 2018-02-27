<template>
  <div>
    <div class="aside">
      <ul>
        <li class="title">内容发布管理</li>
        <li>
          <router-link to="/content/bannerManage">栏目管理</router-link>
        </li>
        <li>
          <router-link to="/content/contentManage">内容管理</router-link>
        </li>
        <li>
          <router-link to="/content/wordsManage">留言管理</router-link>
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