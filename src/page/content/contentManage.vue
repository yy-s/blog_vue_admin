<template>
  <div>
    <!-- 面包屑导航 -->
    <ol class="breadcrumb">
      <li><router-link to="/content">内容发布管理</router-link></li>
      <li class="active">内容管理</li>
    </ol>
    <p class="title">内容管理</p>
    
    <div>
      <!-- Tab栏 -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#articleList" aria-controls="articleList" role="tab" data-toggle="tab">文章列表</a></li>
        <li role="presentation"><a href="#addArticle" aria-controls="addArticle" role="tab" data-toggle="tab">添加栏目</a></li>
      </ul>

      <!-- 内容区 -->
      <div class="tab-content">
         <!-- 文章列表 -->
        <div role="tabpanel" class="tab-pane active" id="articleList">
          <div class="search">
            <input type="text" name="" id="search" placeholder="请输入搜索关键字">
            <span class="glyphicon glyphicon-search search"></span>
          </div>
          <table>
            <thead>
              <th>ID</th>
              <th>标题</th>
              <th>所属栏目</th>
              <th>点击量</th>
              <th>添加时间</th>
              <th>推荐</th>
              <th>置顶</th>
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
              <td>2222</td>
            </tbody>
          </table>
        </div>
        <!-- 添加文章 -->
        <div role="tabpanel" class="tab-pane" id="addArticle">
          
          <form action="">
            所属栏目：<input type="text" name="banner_name" id="" placeholder="请输入栏目地址"><br>
            　　标题：<input type="text" name="title" id="" placeholder="请输入标题"><br>
            　　图片：<input type="text" name="article_img" id=""><br>
            是否推荐：是<input type="radio" name="banner_nav" id="">
                     否<input type="radio" name="banner_nav" id=""><br>
            是否置顶：是<input type="radio" name="banner_nav" id="">
                     否<input type="radio" name="banner_nav" id=""><br>
            关 键 字：<input type="text" name="keyWords" id="" placeholder="请输入关键字"><br>
            　　摘要：<textarea name="banner_msg" id="" cols="30" rows="10"></textarea><br>
            文章内容：<textarea name="" id="txt" cols="30" rows="10"></textarea><br>
            添加时间：<input type="date" name="date"><br>
            点 击 量：<input type="text" name="click" id=""><br>
            <input type="submit" value="立即提交">           
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

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
#addArticle {
  padding-left: 50px;
  margin-top: 20px;
  select,input,textarea {
    width: 300px;
  }
  input[type="radio"] {
    width: 20px;
    margin-top: 10px;
  }
  input[type="submit"]{
    margin: 15px 100px;
    width: 100px;
  }
}
</style>