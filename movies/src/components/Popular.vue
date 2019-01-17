<template>
<v-container>
  <div class="text-xs-center popular-pagination">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
  <v-layout wrap row>
    <v-flex 
      class="popular-card"
      xs3
      offset-xs1
      v-for="movie in getSixMovies"
      :key="movie.id"
    >
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="imgSlug + movie.backdrop_path"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Popularity: {{ movie.popularity }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">{{ movie.title }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { setTimeout } from 'timers';

export default {
  name: 'Popular',
  data() {
    return {
      imgSlug: 'https://image.tmdb.org/t/p/w500',
      page: 1
    }
  },
  computed: {
    ...mapGetters(['getPopularMovies']),
    getSixMovies() {
      return this.getPopularMovies.filter((el, ind) => {
        return ind >= (this.page - 1)*6 && ind < this.page*6
      })
    }
  },
  watch: {
    getPopularMovies() {
      console.log('getterW ', this.getPopularMovies)
    }
  },
  created() {
    console.log('getterC ', this.getPopularMovies)
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

