import Vue from 'vue'
import Router from 'vue-router'

import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlog from '@/components/SingleBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add-blog',
      component: AddBlog
    },
    {
      path: '/show-blog',
      component: ShowBlogs,
    },
    {
      path: '/single-blog/:id',
      component: SingleBlog
    },
    {
      path: '/',
      redirect:'/show-blog'
    }

    ]
  
})
