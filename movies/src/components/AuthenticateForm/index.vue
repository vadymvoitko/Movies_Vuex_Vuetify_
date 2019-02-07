<template>
<v-layout>
  <v-flex xs8 offset-xs2>
    <v-container>
      <v-text-field
        v-model="localEmail"
        label="E-mail"
        counter="30"
        :error-messages="checkErrors('localEmail')"
        @blur="$v.localEmail.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="localPassword"
        label="password"
        :error-messages="checkErrors('localPassword')"
        @blur="$v.localPassword.$touch()"
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
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'AuthenticateForm',
  data() {
    return {
      localEmail: '',
      localPassword: ''
    }
  },
  validations: {
    localEmail: {
      required,
      maxLength: maxLength(30),
      email
    },
    localPassword: {
      required
    }
  },
  props: ['entity'],
  methods: {
    login() {
      this.$v.$touch();
      !this.$v.$anyError && this.$emit(this.entity,
        { 
          email: this.localEmail,
          password: this.localPassword
        }
      )
    },
    checkErrors(field) {
      const errors = [];
      if(!this.$v.$anyDirty) return errors;
      if (this.$v[field].$error) {
        if (this.$v[field].email === false) {
          errors.push(`field ${field} should contain valid email`)
        }
        if (this.$v[field].required === false) {
          errors.push(`field ${field} shouldn't be empty`)
        }
        if (this.$v[field].maxLength === false) {
          errors.push(`field ${field} shouldn't be longer then 30`)
        }
      }
      return errors
    }
  },
  created() {
  }
}
</script>