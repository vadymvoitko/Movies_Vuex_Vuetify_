<template>
  <div>
    <v-layout v-if="getMovieByTitle">
      <v-flex xs10 offset-xs1>
        <v-card>
        <v-img
          v-if="getMovieByTitle.backdrop_path"
          :src="imgSlug + getMovieByTitle.backdrop_path"
          aspect-ratio="2.75"
        ></v-img>
        <div class="movie__content" v-for="item in items" :key="item.id">
          <h1>{{ item.title }}:</h1><span class="movie__content__text">{{ getMovieByTitle[item.value] }}</span>
        </div>
      </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'MovieDetails',
  data() {
    return {
      imgSlug: 'https://image.tmdb.org/t/p/w500',
      items: [
        {title: "Title", value: 'title'}, 
        {title: "Description", value: 'overview'}, 
        {title: "Release Date", value: "release_date"}, 
        {title: "Original Language", value: "original_language"}, 
        {title: "Average Rate", value: "vote_average"}, 
        {title: "Rate Count", value: "vote_count"}
      ]}
  },
  computed: {
    ...mapGetters(['getPopularMovies']),
    getMovieByTitle() {
      const title = this.$route.params.title;
      return this.getPopularMovies.filter(
        item => item.title.toLowerCase() === title.toLowerCase()
        )[0]
    }
  },
}
</script>

<style lang="scss" scoped>
  .movie {
    &__content {
      text-align: center;

      &__text {
        font-size: 25px;
        padding: 10px 0 0 10px;
      }
    }
  }
  h1 {
    display: inline;
  }
</style>