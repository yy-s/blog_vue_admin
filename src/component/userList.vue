<template>
  <div>
    <div class="top"></div>
      <div class="nav">
        <ol class="breadcrumb">
          <li><a href="#">博客后台管理</a></li>
          <li><a href="#">用户管理</a></li>
          <li class="active">用户列表</li>
        </ol>
      </div>
      <p class="opa">
        <span><button type="button" class="btn btn-primary">添加用户</button></span>
        <span><input type="text" name="" id="" class="search" placeholder="请输入要查询的用户名">
          <button type="button" class="btn btn-primary btn-sm">查询</button></span>
      </p>
      <div class="table">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>编号</th>
              <th>用户名</th>
              <th>移动电话</th>
              <th>性别</th>
              <th>用户简介</th>
              <th>注册时间</th>
              <th>用户状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>an</td>
              <td>1111111111111</td>
              <td>1</td>
              <td>11111111111111111</td>
              <td>1111111111111111</td>
              <td><button type="button" class="btn btn-danger btn-xs">禁用</button></td>
              <td>
                <button type="button" class="btn btn-info btn-xs">编辑</button>
                <button type="button" class="btn btn-danger btn-xs">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
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
  .top {
    height: 100px;
  }
  .nav {
    .breadcrumb {
      background-color: #fff;
    }
  }
  .opa {
    background-color: lightcyan;
    display: flex;
    justify-content: space-between;
    padding: 7px 10px;
    border-radius: 5px;
    span {
      display: inline-block;
      input {
        line-height: 27px;
        border: 1px solid #ccc;
        border-radius: 7px;
        padding-left: 10px;
      }
    }
  }
  .table {
    background-color: #fff;
    thead {
      th {
        text-align: center;
      }
    }
    tbody {
      td {
        text-align: center;
      }
    }
  }
</style>