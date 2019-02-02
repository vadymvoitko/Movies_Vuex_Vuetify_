import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Popular from '@/components/Popular'
import MovieDetails from '@/components/MovieDetails'
import Favourites from '@/components/Favourites'
import testPurpose from '@/components/testPurpose'
import Login from '@/components/Login'
import Register from '@/components/Register'

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
    {
      name: 'Favourites',
      path: '/favourites',
      component: Favourites
    },
    {
      name: 'MovieDetails',
      path: '/movie/:title',
      component: MovieDetails
    },
    {
      name: 'testPurpose',
      path: '/1',
      component: testPurpose
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    },

  ]
})

export default router