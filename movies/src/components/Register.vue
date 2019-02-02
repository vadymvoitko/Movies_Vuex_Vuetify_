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
      <v-btn @click="register">
        Register
      </v-btn>
    </v-container>
  </v-flex>
</v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.$router.push('/login')
          })
        .catch(function(error) {
          console.log(error)
        });
    }
  },
  created() {
    console.log(firebase.auth().currentUser)
  }
}
</script>