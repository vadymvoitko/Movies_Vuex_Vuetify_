<template>
  <AuthenticateForm
    entity="login"
    @login="login"
  />
</template>

<script>
import firebase from 'firebase'
import AuthenticateForm from './AuthenticateForm' 
export default {
  name: 'login',
  data() {
    return {
    }
  },
  components: {
    AuthenticateForm
  },
  methods: {
    login({email, password}) {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
          this.$store.commit('Login', firebase.auth().currentUser.email)
        })
      .catch(function(error) {
        console.log(error)
      });
    }
  },
  created() {
  }
}
</script>