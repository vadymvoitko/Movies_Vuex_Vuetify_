import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Popular from '@/components/Popular'
import MovieDetails from '@/components/MovieDetails'
import Favourites from '@/components/Favourites'

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
    }
  ]
})

export default router