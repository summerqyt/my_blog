<template>
  <div class="add-blog">
      <h2>写博客</h2>
      <form> <!--v-if="!blog.submited"-->
        <label>主题</label><br>   
        <el-input type="text" style=":focus=box-shadow" v-model="blog.title" required placeholder="请输入主题"></el-input><br>        
        <label>内容</label><br>      
        <el-input type="textarea" :rows="5" v-model="blog.content" placeholder="请输入内容"></el-input><br>        
        <label>分类</label><br>    
        <el-checkbox-group id="classify" v-model="blog.categories">
          <el-checkbox label="Vue.js"></el-checkbox>  
          <el-checkbox label="Javascript"></el-checkbox>
          <el-checkbox label="HTML"></el-checkbox>
          <el-checkbox label="Css"></el-checkbox>
          </el-checkbox-group>    
        <label>作者</label><br>
        <el-select v-model="blog.author" >
          <el-option v-for=" item in authors" :key="item.value" :lable="item.label" :value="item.value"></el-option>
        </el-select>
      </form>

      <!--点击提交POST-->
      <el-button class="post-btn" @click="add"  type="primary" size="medium" plain>提交</el-button>
      
      <!--博客编辑预览-->
      <h3>博客预览</h3>
      <div id="preview">       
        <p>主题：{{blog.title}}</p>
        <p>内容：</p>
        <p>{{blog.content}}</p>
        <p>分类：</p>
        <ul>
          <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
        </ul>
        <p>作者：{{blog.author}}</p>
      </div>
      
  </div>
</template>

<script>
export default {
  name:'AddBlog',
  data () {
    return {
      blog:{
        title:"",
        content:"",
        categories:[],
        author:"",
        time:""
        //submited:false
      },
      authors:[{
        value:'QiuYiting',
        label:'1'
        },{
        value:'ZhuShiqi',
        label:'2'
        },{
        value:'Summer',
        label:'3'
        }]
    }
  },
  methods: {
    async add () {
      //将博客数据添加到数据库
      const d = new Date();
      this.blog.time = d.getFullYear()+"/"+d.getMonth()+"/"+d.getDate();
      const data = {
        title: this.blog.title,
        content: this.blog.content,
        author: this.blog.author,
        time: this.blog.time
      }
      console.log(data)
      this.$emit('addData', data)
      //this.blog.submited = true;
      alert("新的博客创建成功！");
      //点击提交后初始化输入框（清空）
      this.blog.title = "";
      this.blog.content = "";
      this.blog.author = "";
      this.blog.categories = [];
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin-top: 10px;
  margin-bottom: 15px;
  font-family: "微软雅黑";
}
h2,h3{
  color: #303133;
  
}
label,p{
  color:#606266 ;
  font-weight: bold;

}
 .add-blog{
   width: 800px;
   margin: 0 auto;
   padding: 0 100px;
   
 }
 .post-btn{
   display: block;
   
   margin: 0 auto;
 }
 #preview{
   padding: 10px 20px;
   border: 2px dotted #ccc;
   margin: 30px 0;
   font-weight: bold;
 }
 #classify el-checkbox{
   margin-left:5px;
 }
</style>