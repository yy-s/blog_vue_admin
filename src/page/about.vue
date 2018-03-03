<template>
  <div class="about">
    <div class="aside">
      <ul>
        <li class="title">
          <router-link to="/about/aboutList">关于我们</router-link>
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