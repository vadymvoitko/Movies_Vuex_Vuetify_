<template>
<v-layout>
  <v-flex xs8 offset-xs2>
    <v-container>
      <v-text-field
        v-model="localEmail"
        label="E-mail"
      ></v-text-field>
      <v-text-field
        v-model="localPassword"
        label="password"
      ></v-text-field>
      <v-btn @click="login">
        {{ entity }}
      </v-btn>
      <router-link 
        v-if="entity === 'login'" 
        to="/register"
      >
        Registration
      </router-link>
    </v-container>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'AuthenticateForm',
  data() {
    return {
      localEmail: '',
      localPassword: ''
    }
  },
  props: ['entity'],
  methods: {
    login() {
      this.$emit(this.entity,
        { 
          email: this.localEmail,
          password: this.localPassword
        }
      )
    }
  },
  created() {
  }
}
</script>