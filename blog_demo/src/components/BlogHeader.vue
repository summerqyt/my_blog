<template>
  <div class="top-nav">
      <el-menu  class="el-menu-demo" mode="horizontal">
        <el-menu-item class="summer">SummerQYT</el-menu-item>
        <el-menu-item index="1"><router-link to="/show-blog" class="home"><i class="el-icon-s-home"></i>主页</router-link></el-menu-item>
        <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>分类</template>
            <el-menu-item index="2-1">Javascript</el-menu-item>
            <el-menu-item index="2-2">Vue.js</el-menu-item>
            <el-menu-item index="2-3">HTML/CSS</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">计算机基础</template>
            <el-menu-item index="2-4-1">数据结构与算法</el-menu-item>
            <el-menu-item index="2-4-2">计算机网络</el-menu-item>
            <el-menu-item index="2-4-3">操作系统</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-button type="primary" icon="el-icon-edit" class="write-blog" size="small" round>
            <router-link to="/add-blog" class="write-into">写博客</router-link>
        </el-button>
      </el-menu>
  </div>
  
</template>

<script>

export default {
  name: 'BlogHeader',
  props:{
    datas: Object, //指定属性名和属性值的类型
    addData: Function
}
}
</script>

<style scoped >
a{
    text-decoration: none;
}
.write-blog{
    float: right;
    margin-top: 10px;
    
}
.write-into{
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: left;
    color: white;
}
.summer{
    color:#242424;
    font-size: 20px;
    margin-top: -2px;
}
.el-icon-s-home{
    margin-right: 3px;
    margin-top: -3px;
}
.home{
    display: block;
    width: 100%;
    height: 100%;
}
</style>
