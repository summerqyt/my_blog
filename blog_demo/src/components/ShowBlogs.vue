<template>
  <div id="show-blogs"> 
      <div class="blogsList">        
        <h1>博客主页</h1>
        <el-input type="text" style=":focus=box-shadow" placeholder="搜索" v-model="search" class="search"></el-input>        
        <div class="single-blog" v-for="(data,index) in filterBlogs" :key="data.id" :ref="index"  >
          <router-link :to="`/single-blog/${data.id}`">
           <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>{{data.title}}</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看全部</el-button>
              </div>
              <div class="text item">
                {{data.content}}
              </div>
              <div class="info">
                <i class="el-icon-time"> {{data.time}}</i>
                <i class="el-icon-user-solid"> {{data.author}}</i>                
              </div>
            </el-card>
          </router-link>           
        </div>
      </div>
     <el-backtop></el-backtop>
  </div>
</template>

<script>

export default {
  name: 'ShowBlogs',
  props: {
    datas: {
      type: Array
    }
  },
  data() {
    return {
      search:"",
    }
  },
  computed:{
    filterBlogs:function(){
      return this.datas.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.box-card span{
  font-size: 20px;
  font-weight: bold;
}
.blogsList{
  width: 800px;
  margin: 0 auto;
}
.info{
  font-size: 12px;
}
.info i{
  margin-right: 10px;
}
</style>
