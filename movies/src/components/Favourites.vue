<template>
<v-container>
  <div class="text-xs-center popular-pagination">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
  <MovieCard
    :movies="getFavourites.movies"
    :favouritesIds="favouritesIds"
    @addToFavourites="addToFavourites($event.value, $event.id)"
  />
</v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import favourites from './mixins/favourites.js';
import MovieCard from './MovieCard'

export default {
  name: 'Favourites',
  data() {
    return {
      getFavourites: {
        allMovies: [],
        get movies() {
          return this.allMovies
        },
        set movies(val) {
          this.allMovies = [...val]
        }
      },
      favouritesIds: [],
      page: 1,
      imgSlug: 'https://image.tmdb.org/t/p/w500'
    }
  },
  methods: {
    filterMovies() {
      this.getFavourites.movies = this.getPopularMovies.filter(item => this.favouritesIds.includes(item.id));
    }
  },
  components: {
    MovieCard
  },
  mixins: [favourites],
  computed: {
    ...mapGetters(['getPopularMovies', 'getMovieById'])
  },
  watch: {
    getPopularMovies() {
      this.filterMovies()
    }
  },
  created() {
    const uid = this.$store.getters.getUid;
    console.log('2 ', JSON.parse((Cookie.get('favourites'))))
    this.favouritesIds = ( uid && Cookie.get('favourites') && JSON.parse(Cookie.get('favourites'))[uid]) || [];
    console.log('123 ', this.favouritesIds)
    this.filterMovies();
    // filter array of all movies and write it in getFavourites
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

