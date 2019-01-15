import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Popular from '@/components/Popular'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Popular',
      path: '/popular',
      component: Popular
    },
  ]
})

export default router