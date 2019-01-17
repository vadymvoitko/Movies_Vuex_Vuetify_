<template>
  <div>
    <v-layout>
      <v-flex xs10 offset-xs1>
        <v-card>
        <v-img
          v-if="$route.params.image"
          :src="imgSlug + $route.params.image"
          aspect-ratio="2.75"
        ></v-img>
        <div class="movie__content">
          <h1>Title:</h1><span class="movie__content__text">{{ $route.params.title }}</span>
        </div>
        <div class="movie__content">
          <h1>Description:</h1><span class="movie__content__text">{{ $route.params.overview }}</span>
        </div>
        <div class="movie__content">
          <h1>Release Date:</h1><span class="movie__content__text">{{ $route.params.release_date }}</span>
        </div>
        <div class="movie__content">
          <h1>Original Language:</h1><span class="movie__content__text">{{ $route.params.original_language }}</span>
        </div>
        <div class="movie__content">
          <h1>Average Rate:</h1><span class="movie__content__text">{{ $route.params.vote_average }}</span>
        </div>
        <div class="movie__content">
          <h1>Rate Count:</h1><span class="movie__content__text">{{ $route.params.vote_count }}</span>
        </div>
      </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  data() {
    return {
      imgSlug: 'https://image.tmdb.org/t/p/w500'
    }
  }
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