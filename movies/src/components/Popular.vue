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

