<template>
  <div>
    <!-- 面包屑导航 -->
    <ol class="breadcrumb">
      <li><router-link to="/content">内容发布管理</router-link></li>
      <li class="active">栏目管理</li>
    </ol>
    <p class="title">栏目管理</p>

    <div>
      <!-- Tab栏 -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#bannerList" aria-controls="bannerList" role="tab" data-toggle="tab">栏目列表</a></li>
        <li role="presentation"><a href="#addBanner" aria-controls="addBanner" role="tab" data-toggle="tab">添加栏目</a></li>
        <li role="presentation"><a href="#addHref" aria-controls="addHref" role="tab" data-toggle="tab">添加外部链接</a></li>
      </ul>

      <!-- 内容区 -->
      <div class="tab-content">
         <!-- 栏目列表 -->
        <div role="tabpanel" class="tab-pane active" id="bannerList">
          <table>
            <thead>
              <th>排序</th>
              <th>ID</th>
              <th>栏目名称</th>
              <th>所属模型</th>
              <th>导航显示</th>
              <th>操作</th>
            </thead>
            <tbody>
              <td>11</td>
              <td>2222</td>
              <td>2222</td>
              <td>2222</td>
              <td>2222</td>
              <td>2222</td>
            </tbody>
          </table>
        </div>
        <!-- 添加栏目 -->
        <div role="tabpanel" class="tab-pane" id="addBanner">
          <form action="">
            选择模型： <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select><br>
            栏目名称：<input type="text" name="banner_name" id="" placeholder="请输入栏目地址"><br>
            栏目图片：<input type="text" name="banner_img" id=""><br>
            栏目描述：<textarea name="banner_msg" id="" cols="30" rows="10"></textarea><br>
            是否显示导航：是<input type="radio" name="banner_nav" id="">
                         否<input type="radio" name="banner_nav" id=""><br>
            是否显示封面：是<input type="radio" name="banner_fm" id=""> 
                         否<input type="radio" name="banner_fm" id=""> <br>
            <input type="submit" value="立即提交">           
          </form>
        </div>
        <!-- 添加外部链接 -->
        <div role="tabpanel" class="tab-pane" id="addHref">
          <form action="">
            栏目名称：<input type="text" name="banner_name" id="" placeholder="请输入栏目地址"><br>
            链接地址：<input type="text" name="hrefAdress" id="" placeholder="http://开始"><br>
            栏目图片：<input type="text" name="banner_img" id=""><br>
            栏目描述：<textarea name="banner_msg" id="" cols="30" rows="10"></textarea><br>
            是否显示导航：是<input type="radio" name="banner_nav" id="">
                         否<input type="radio" name="banner_nav" id=""><br>
            是否显示封面：是<input type="radio" name="banner_fm" id=""> 
                         否<input type="radio" name="banner_fm" id=""> <br>
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
table {
  margin-top: 20px;
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
#addBanner,#addHref {
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