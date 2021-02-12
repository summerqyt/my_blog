<template>
  <div id="show-blogs"> 
      <div class="blogsList">        
        <h1>博客主页</h1>
        <el-input type="text" style=":focus=box-shadow" placeholder="搜索" v-model="search" class="search"></el-input>
        <div v-show="!search">
          <div class="single-blog" v-for="(data,index) in currentBlogs" :key="data.id" :ref="index"  >
            <router-link :to="`/single-blog/${data.id}`">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>{{data.title}}</span>
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
        <div v-show="search">
          <div class="single-blog" v-for="(data,index) in filterBlogs" :key="data.id" :ref="index"  >
            <router-link :to="`/single-blog/${data.id}`">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>{{data.title}}</span>
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
        <el-pagination background layout="prev, pager, next" :total="datas.length" :page-size="pageSize" @prev-click="prePage" @next-click="nextPage" @current-change="currPage" class="pagination"></el-pagination>
      </div>
      <el-card class="right-box">
        <div class="person">
          <img src="./user.png" alt="user">
          <p class="username">summerQiu</p>
          <div class="count">
            <div class="count-left">
              <h3>{{datas.length}}</h3>
              <h6>Article</h6>             
            </div>
            <div class="count-right">
              <h3>5</h3>
              <h6>Tag</h6>             
            </div>
          </div>
          
        </div>
        <hr>
        <div class="category">
          <h4><i class="el-icon-menu"></i> Category</h4>
          <div class="cate-card">
            <div class="single-card"><a>HTML/CSS</a><span style="background-color: rgb(92, 167, 186);">1</span></div>
            <div class="single-card"><a>Javascript</a><span style="background-color: rgb(178, 200, 187);">1</span></div>
            <div class="single-card"><a>Vue.js</a><span style="background-color: rgb(255, 245, 247);">1</span></div>
            <div class="single-card"><a>数据结构与算法</a><span style="background-color: rgb(220, 87, 18);">1</span></div>
            <div class="single-card"><a>计算机网络</a><span style="background-color: rgb(229, 131, 8);">1</span></div>
            <div class="single-card"><a>操作系统</a><span style="background-color: rgb(244, 208, 0);">1</span></div>
          </div>
        </div>
        <hr>
        <div class="tag">
          <h4><i class="el-icon-price-tag"></i> Tags</h4>
          <div class="tag-box">
            <span style="background-color:#008792">All</span>
            <span style="background-color:#dbce8f">git</span>
            <span style="background-color:#afdfe4">Javascript</span>
            <span style="background-color:#b69968">vue</span>
            <span style="background-color:#a3cf62">indexedDB</span>
            <span style="background-color:#fdb933">css</span>
            <span style="background-color:#76becc">计算机网络</span>
            <span style="background-color:#d3c6a6">HTML</span>
            <span style="background-color:#ef4136">ajax</span>
            <span style="background-color:#65c294">jquery</span>
            <span style="background-color:#cbc547">Blog</span>
          </div>
        </div>
      </el-card>
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
      // 所有页面的数据
      totalPage: [],
      // 每页显示数量
      pageSize: 6,
      // 共几页
      pageNum: 1,
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      current: 0
    }
  },
  computed:{
    filterBlogs:function(){
      return this.datas.filter((blog) => {
        return blog.title.match(this.search);
      })
    },
    currentBlogs:function(){
      this.pageNum = Math.ceil(this.datas.length / this.pageSize) || 1;
      for(let i = 0; i < this.pageNum; i++){
          this.totalPage[i] = this.datas.slice(this.pageSize * i, this.pageSize * (i + 1))
      }
      this.dataShow = this.totalPage[this.current];
      return this.dataShow;
    }
  },
  methods: {
    //当前页
    currPage(event){
      this.current = event - 1;
      this.dataShow = this.totalPage[this.current];
    },
    // 下一页
    nextPage() {
      if (this.current === this.pageNum - 1) return ;
      this.dataShow = this.totalPage[++this.current];
    },
    // 上一页
    prePage() {
      if (this.current === 0) return ;
      this.dataShow = this.totalPage[--this.current];
    }
  },
}
</script>

<style scoped>
#show-blogs{
  width: 1000px;
  height: 1300px;
  /* border: 1px solid silver; */
  margin: 0 auto;
  position: relative;
}
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
  width: 680px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.box-card:hover{
  box-shadow:0 2px 16px 0 rgba(0, 0, 0, 0.2);
}
.box-card span{
  font-size: 20px;
  font-weight: bold;
}
.blogsList{
  width: 680px;
  height: 1270px;
  position: absolute;
  left: 0;
  /* border: 1px solid gray; */
}
.info{
  font-size: 12px;
}
.info i{
  margin-right: 10px;
}
.right-box{
  width: 300px;
  height: 1186px;
  position: absolute;
  right: 0;
  margin-top: 84px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.right-box:hover{
  box-shadow:0 2px 16px 0 rgba(0, 0, 0, 0.2);
}
.pagination{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.person{
  width: 100%;
  /* border: 1px solid gray; */
  height: 250px;
  position: relative;
}
.category{
  width: 100%;
  /* border: 1px solid gray; */
  height: 400px;
}
.tag{
  width: 100%;
  /* border: 1px solid gray; */
  height: 300px;
}
img{
  width: 70px;
  height: 70px;
  border-radius: 50%;  
  display: flex;
  margin: 10px auto 1rem;
}
.username{
  display: flex;
  margin: 0 auto;
  width: 35%;
}
.count{
  display: flex;
  margin: 30px auto 1rem;
  width: 80%;
}
.count-left{
  flex: 0 0 50%;
  text-align: center;
  font-size: 15px;
  border-right: 1px solid gray;
}
.count-right{
  flex: 0 0 50%;
  text-align: center;
  font-size: 15px;
}
h3,h6{
  font-weight: 500;
  line-height: 1.25;
  margin: 0.6rem 0 0.6rem ;
}
.cate-card{
  padding: 0 14px;
}
.single-card{
  width: 210px;
  height: 20px;
  font-size: 14px;
  margin-top: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: .6rem .8rem;
  position: relative;
}
.single-card:hover{
  box-shadow:0 2px 16px 0 rgba(0, 0, 0, 0.2);
}
.single-card span{
  width: 1.6rem;
  height: 1.4rem; 
  border-radius: 4px;
  display: block;
  position: absolute;
  top: 7px;
  right: 10px;
  text-align: center;
  padding-top: 3px;
}
.tag-box{
  width: 100%;
  height: 200px;
}
.tag-box span{
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  display: inline-block;
  cursor: pointer;
  border-radius: .25rem;
  color: #fff;
  line-height: 13px;
  font-size: 13px;
  box-shadow:0 2px 6px 0 rgba(0, 0, 0, 0.2);

}
.tag-box span:hover{
  box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
</style>
