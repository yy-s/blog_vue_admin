<template>
  <div>
    <!-- 面包屑导航 -->
    <ol class="breadcrumb">
      <li><router-link to="/content">用户管理</router-link></li>
      <li class="active">用户列表</li>
    </ol>
    <p class="title">用户管理</p>
    
    <div>
      <!-- Tab栏 -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#userList" aria-controls="userList" role="tab" data-toggle="tab">留言列表</a></li>
      </ul>

      <!-- 内容区 -->
      <div class="tab-content">
        <div class="search">
          <input type="text" name="" id="search">
          <span class="glyphicon glyphicon-search search"></span>
        </div>
        
         <!-- 文章列表 -->
        <div role="tabpanel" class="tab-pane active" id="userList">
          <table>
            <thead>
              <th>ID</th>
              <th>昵称</th>
              <th>性别</th>
              <th>添加时间</th>
              <th>修改时间</th>
              <th>最后登录时间</th>
              <th>操作</th>
            </thead>
            <tbody>
              <td>11</td>
              <td>2222</td>
              <td>2222</td>
              <td>2222</td>
              <td>2222</td>
              <td>2222</td>
              <td>2222</td>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      flag:false
    };
  },
  methods:{
    
  },
  created(){
  }
}
</script>
<style lang="less" scoped>
p.title {
  width: 80px;
  height: 45px;
  background-color: #19A094;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 45px;
  border-radius: 4px;
}
.nav {
  &.nav-tabs {
    margin-top: -50px;
    margin-left: 100px;
  }
}
.tab-content {
  .search {
    width: 250px;
    height: 33px;
    position: relative;
    margin-top: 10px;
    input {
      // width: 200px;
      height: 35px;
      margin-top: 5px;
      padding: 0;
      margin: 0;
    }
    span {
      display: inline-block;
      width: 33px;
      height: 33px;
      position: absolute;
      right: 0;
      top: 1px;
      background-color: #19A094;
      margin: 0;
      border-radius: 0 3px 3px 0;
      text-align: center;
      line-height: 35px;
    }
  }

  table {  margin-top: 20px;
    width: 100%;
    th,td {
      border: 1px solid #aaa;
      text-align: center;        
    }
    th {
      line-height: 40px;
    }
    td {
      line-height: 30px;
    }
  }
}
</style>