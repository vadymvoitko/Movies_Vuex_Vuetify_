<template>
  <v-layout wrap row>
    <v-flex 
      class="popular-card"
      xs3
      offset-xs1
      v-for="movie in movies"
      :key="movie.id"
    >
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="imgSlug + movie.poster_path"
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
          <v-checkbox 
              label="Add to favourite"
              :input-value="checkFavourite(movie.id)"
              color='primary'
              @change="addToFavouritesLocal($event, movie.id)"
            />
          <v-btn 
            flat 
            color="orange"
            :to="{
              name: 'MovieDetails', 
              params: {
                title: movie.title.toLowerCase()
              }
              }"
          >
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import favourites from './../mixins/favourites.js'
export default {
  name: 'MovieCard',
  data() {
    return {
      imgSlug: 'https://image.tmdb.org/t/p/w500'
    }
  },
  methods: {
    addToFavouritesLocal(value, id) {
      this.$emit('addToFavourites', {value, id})
    }
  },
  mixins: [favourites],
  props: ['movies', 'favouritesIds']
}
</script>