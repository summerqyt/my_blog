<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <!--路由组件间数据传递-->
    <router-view @addData="addData" :datas="datas"></router-view>
    <!-- <AddBlog @addData="addData"></AddBlog> -->
    <!-- <add-data-comp @addData="addData" ></add-data-comp> -->
    <!-- <ShowBlogs :datas="datas"></ShowBlogs>   -->
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

const storeNames = 'Blogs'

export default {
  name: 'App',
  data() {
    return {
      datas: [],
      maxId: 0,
      searchDatas: []
    }
  },
  components:{
    AddBlog,
    ShowBlogs,
    BlogHeader

  },
  methods: {
    async addData (data) {
      // 父组件维护maxid
      data.id = ++this.maxId
      await this.db[storeNames].add(data).catch(err => {
        console.log(err.message)
      })
      this.datas.unshift(data)
    },
    async deletData (id) {
      // 从indexedDB中删除
      await this.db.Blogs.remove(id).catch(err => {
        console.log(err)
      })
      this.datas.splice(this.datas.findIndex(item => item.id === id), 1)
      this.maxId = !this.datas.length ? 0 : this.maxId
    },
    async updateData (data) {
      await this.db.Blogs.update(data).catch(err => {
        console.log(err)
      })
    },
    async searchData (name) {
      this.searchDatas = await this.db.Blogs.readWithIndex(name).catch(err => {
        console.log(err)
      })
    }
  },
  async mounted () {
    // TODO: 这里要想办法解决了!!!!
    setTimeout(async () => {
      this.datas = await this.db.Blogs.readAll().catch(err => {
        console.log(err)
      }) || []

      this.maxId = this.datas[this.datas.length - 1].id
    }, 2000)
  }

}
</script>

<style>


</style>
