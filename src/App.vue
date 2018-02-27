<template>
  <div class="grip">
    <div class="boxLeft">
      <!-- logo -->
      <div class="logo">
        <img src="./images/logo.png" alt="">
      </div>
      <!-- 侧边栏 -->
      <router-view></router-view>
    </div>
    <div class="boxRight">
      <!-- 头部导航栏 -->
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><router-link to="/index">首页</router-link></li>
              <li><router-link to="/content">内容</router-link></li>
              <li><router-link to="/user">用户</router-link></li>
              <li><router-link to="/about">关于</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">退出</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
</script>


<style lang="less" scoped>
.grip {
  display: flex;
  .boxLeft {
    width: 160px;
    .logo {
      height: 80px;
      border-bottom: 3px solid #7EC0FA;
      padding-left: 20px;
    }
  }
  .boxRight {
    flex: 1;
    .navbar {
      border-radius: 0px;
    }
    .navbar-default{
      background-color: #393D49;
      margin-bottom: 0;
      height: 80px;
      border: 0;
      .navbar-header {
        img {
          height: 60px;
          margin-top: 10px;
          margin-left: 40px;
        }   
      }
      .navbar-collapse {
        .navbar-nav {
          margin-left: 15px;
          li a {
            padding: 0 15px;
            margin-left: 30px;
            line-height: 80px;
            color: #ccc;
            font-size: 24px;
          }
        }
      }  
    }
  }
}

.active {
  color: #fff !important;
  font-weight: 700;
}
</style>
