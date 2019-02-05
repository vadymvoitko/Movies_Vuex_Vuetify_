<template>
  <AuthenticateForm
    entity="register"
    @register="register"
  />
</template>

<script>
import firebase from 'firebase'
import AuthenticateForm from './AuthenticateForm'
export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    AuthenticateForm
  },
  methods: {
    register({email, password}) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          this.$router.push('/login')
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