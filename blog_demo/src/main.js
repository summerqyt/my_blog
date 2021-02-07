// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import db from './common/db'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI

Vue.config.productionTip = false
Vue.prototype.db = db // 全局挂在操作db
const dbName = 'vueDB',personObjectStore = 'Blogs'

//自定义过滤器

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  async created () {
    // 创建数据库
    await this.db.createOrOpenDb(dbName, 1)
    // 创建对象结构
    await this.db.createObjectStore(personObjectStore, {
      keyPath: 'id',
      id: true,
      title: false,
      content: false,
      author: false,
      time: false
    })
    // 创建对象结构所属的方法
    await this.db.createObjectStoreOperations(personObjectStore)
  }
})
