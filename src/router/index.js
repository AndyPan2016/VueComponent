import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index/view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/components/:type',
      name: 'IndexPageComponents',
      component: IndexPage
    }
  ]
})
