<template>
  <div>
    <div class="single-blog">
      <el-card class="box-card">
        <!-- <p>ID:{{$route.params.id}}</p> -->
        <h2>{{singleData.title}}</h2>
        <hr>
        <p>{{singleData.content}}</p>
        <hr>
        <div class="info">
          <i class="el-icon-time"> {{singleData.time}}</i>
          <i class="el-icon-user-solid"> {{singleData.author}}</i>                
        </div>
      </el-card>     
    </div>
      
  </div>
  
</template>

<script>

export default {
  name: 'SingleBlog',
  props: {
    datas: {
      type: Array
    }
  },
  data() {
      return {
        singleData:{}
      }
  },
  mounted() {
    const id = this.$route.params.id*1
    this.singleData = this.datas.find(blog => blog.id === id)
  },
  watch:{
    $route:function(value){
      const id = value.params.id*1
      this.singleData = this.datas.find(blog => blog.id ===id)
    }
  }
}
</script>

<style scoped >
hr{
  background-color:silver; 
  height:1px; 
  border:none;
}
.single-blog{
  width: 800px;
  margin: 30px auto;
}
.info{
  font-size: 13px;
}
.info i{
  margin-right: 10px;
}
</style>