<template>
<v-layout>
  <v-flex xs8 offset-xs2>
    <v-container>
      <v-text-field
        v-model="email"
        label="E-mail"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="password"
      ></v-text-field>
      <v-btn @click="login">
        Login
      </v-btn>
      <router-link to="/register">Registration</router-link>
    </v-container>
  </v-flex>
</v-layout>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
          this.$store.commit('Login', firebase.auth().currentUser.email)
          // console.log(firebase.auth().currentUser.email)
        })
      .catch(function(error) {
        console.log(error)
      });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(function(user) {
        console.log('user ', user)
      });
    // console.log(firebase.auth().currentUser)
  }
}
</script>