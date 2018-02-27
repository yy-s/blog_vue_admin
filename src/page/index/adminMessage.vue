<template>
  <div>
    <ol class="breadcrumb">
      <li><router-link to="/index">首页</router-link></li>
      <li>管理员信息</li>
      <li class="active">信息修改</li>
    </ol>
    <div class="form1">
      <p>信息修改</p>
      <form action="post" class="adminMsg">
        昵称 <input type="text" name="username" id="username"><br>
        密码 <input type="password" name="pwd" id="pwd"><br>
        姓名 <input type="text" name="cname" id="cname"><br>
        头像 <input type="file" name="headImg" id="headImg">
        <input type="submit" value="提交信息">
      </form>
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
  .form1 {
    margin-left: 20px;
    p {
      width: 80px;
      height: 45px;
      background-color: #19A094;
      color: #fff;
      font-size: 16px;
      text-align: center;
      line-height: 45px;
      border-radius: 4px;
    }
    .adminMsg {
      margin-left: 50px;
      margin-top: 20px;
      width: 300px;
      input {
        width: 260px;
      }
    }
  }
</style>