import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import main from '@/views/layout/main'

Vue.use(Router)

const constRoutes = [
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
export default new Router({
  routes: constRoutes
})
