<template>
  <v-app id="inspire" light>
    <v-navigation-drawer v-model="drawer" fixed app mobile-break-point="0">
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
    <v-toolbar dense class="main-toolbar" app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">
          Main
        </router-link>
      </v-toolbar-title>
      <v-btn icon @click="showSearch = !showSearch">
        <v-icon>search</v-icon>
      </v-btn>
      <!-- <input type="text" class="main-search" placeholder="start typing" oninput="performSearch"> -->
      <transition name="fade">
        <v-flex xs2 v-if="showSearch" class="main-search" placeholder="start typing">
          <v-text-field @input="handleSearch" label="Regular"></v-text-field>
        </v-flex>
      </transition>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="logout" v-if="currentUser">
        {{ currentUser }}
      </v-btn>
      <router-link v-else to="/login">
        Login
      </router-link>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase'
  export default {
    data: () => ({
      drawer: false,
      showSearch: false
    }),
    props: {
      source: String
    },
    computed: {
      currentUser() {
        const userEmail = this.$store.getters.getCurrentUser;
        return userEmail
      }
    },
    methods: {
      handleSearch(event) {
        console.log('test')
        this.$store.dispatch('setSearchMovies', event)
      },
      logout() {
        firebase.auth().signOut().then(res => {
          this.$router.push('/');
          this.$store.commit('Login', '');
          this.$store.commit('setUid', '');
        })
      },
      firebaseSetPersistance() {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function(res) {
          console.log('res ', firebase.auth().currentUser)
        })
        .catch(function(error) {
        });
      }
    },
    created() {
      const Store = this.$store;
      this.$store.dispatch('fetchPopularMovies')
      firebase.auth().onAuthStateChanged(function(user) {
        Store.commit('setUid', user && user.uid);
        Store.commit('Login', user && user.email);
      });
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
  
  .main-search {
    transition: 1s all ease-in-out;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    width: 0;
  }
  
  .fade-enter-to,
  .fade-leave {
    width: 100%;
  }
</style>
