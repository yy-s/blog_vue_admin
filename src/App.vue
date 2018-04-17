<template>
  <div class="box">
    <div class="left">
      <div class="user">
        <div class="admin_user">
          <img src="./images/user.jpg" alt=""> 
        </div>
        <h4>超级管理员</h4>                 
      </div>
      <div class="list">
        <ul>
          <li>
            <a href="javascript:;" class="parent">用户管理</a>
            <ul class="child s">
              <li><router-link to="/userlist">用户列表</router-link></li>
              <li><router-link to="/addUser">添加用户</router-link></li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="parent">文章管理</a>
            <ul class="child s">
              <li><router-link to="/articleList">文章列表</router-link></li>
              <li><router-link to="/articleCommon">文章评论</router-link></li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="parent">留言管理</a>
            <ul class="child s">
              <li><router-link to="/messageOpact">留言操作</router-link></li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="parent">图片管理</a>
            <ul class="child s">
              <li><router-link to="/pictureManage">图片管理</router-link></li>
              <li><router-link to="/pictureOpact">图片操作</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
$(function(){
  $('.parent').click(function(){
    $(this).siblings('.child').toggleClass('s');
    $(this).parent('li').siblings('li').children('.child').addClass('s');
  })
  // $('.p_now').siblings('.child').removeClass('s');
})
export default {
  data() {
    return {
      
    };
  }
}
</script>
<style lang="less" scoped>
.box {
  padding: 10px 10px 10px 210px;
  background-color: #eee;
  font-family: '微软雅黑';
  .left {
    width: 200px;
    background-color: rgb(58, 56, 56);
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    .user {
      height: 160px;
      background-color: #1e1e1e;
      text-align: center;
      padding-top: 15px;
      .admin_user {
        width: 83px;
        height: 83px;
        border-radius: 50%;
        margin: 0px auto;
        overflow: hidden;
        border: 3px solid #ccc;
        img {
          width: 80px;
          height: 80px;
        }
      }
      h4 {
        color: #ccc;
        font-size: 14px;
        font-weight: 700;
        margin-top: 20px;
      }
    }
    .list {
      border-top: 1px solid #ccc;
      ul {
        padding: 40px 0 10px 40px;
        background-color: #1e1e1e;
        li {
          line-height: 35px;
          padding-left: 10px;
          .parent {
            color: #ccc;
            font-size: 16px;
            &.p_now {
              color: #fff;
              font-weight: 700;
            }
          }
          .child {
            padding-top: 10px;
            padding-left: 30px;
            background-color: rgb(58, 56, 56);
            &.s {
              display: none;              
            }
            li {
              line-height: 30px;
              a {
                color: #ddd;
                font-size: 14px;
                &.now {
                  color: #fff;
                  font-weight: 700;                  
                }
              }
            }
          }
        }
      }
    }
  }
}
  
</style>