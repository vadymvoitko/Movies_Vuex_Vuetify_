<template>
  <v-container>
    <div class="text-xs-center popular-pagination">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
      <MovieCard
        :movies="getSixMovies"
        :favouritesIds="favouritesIds"
        @addToFavourites="addToFavourites($event.value, $event.id)"
      />
  </v-container>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  import favourites from './mixins/favourites.js';
  import MovieCard from './MovieCard'
  import axios from 'axios'
  
  export default {
    name: 'Popular',
    data() {
      return {
        imgSlug: 'https://image.tmdb.org/t/p/w500',
        page: 1,
        favouritesIds: [],
        flag: true
      }
    },
    computed: {
      ...mapGetters(['getPopularMovies', 'getUid']),
      getSixMovies() {
        return this.getPopularMovies.filter((el, ind) => {
          return ind >= (this.page - 1) * 6 && ind < this.page * 6
        })
      }
    },
    components: {
      MovieCard
    },
    watch: {
      getUid() {
        const uid = this.getUid;
        this.favouritesIds = uid && Cookie.get('favourites') && JSON.parse(Cookie.get('favourites'))[uid];
      }
    },
    mixins: [favourites],
    created() {
      const uid = this.getUid;
      this.favouritesIds = uid && Cookie.get('favourites') && JSON.parse(Cookie.get('favourites'))[uid];
      axios.get(`https://api.themoviedb.org/3/movie/450465/similar?api_key=777de1c0359913997a49b6a6fc4096fe&language=en-US&page=1`).then(console.log)
    }
  }
</script>

<style>
  .popular-pagination {
    padding: 10px 0;
  }
  
  .popular-card {
    margin: 10px 0;
  }
</style>

