<template>
  <v-app id="inspire" light>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      mobile-break-point="0"
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <router-link class="side-link" to="/favourites">
            <v-list-tile-content>
                Favourite
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <router-link class="side-link" to="/popular">
            <v-list-tile-content>
                Popular
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      dense 
      class="main-toolbar"
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">
          Main
        </router-link>
      </v-toolbar-title>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false
    }),
    props: {
      source: String
    },
    created() {
      this.$store.dispatch('fetchPopularMovies')
      console.log()
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    color: black !important;
  }

  .side-link {
    width: 100%;
  }
</style>
