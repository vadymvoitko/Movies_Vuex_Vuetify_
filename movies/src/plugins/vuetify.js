import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
console.log(1)
Vue.use(Vuetify, {
  iconfont: 'md',
})

import firebase from 'firebase'
console.log('firePlagin', firebase)
const config = {
  apiKey: "AIzaSyBWHNLUVzDgWDxaO_-ps-d3Y5fEbasN5Hs",
  authDomain: "webseo28.firebaseapp.com",
  databaseURL: "https://webseo28.firebaseio.com",
  projectId: "webseo28",
  storageBucket: "webseo28.appspot.com",
  messagingSenderId: "591755014500"
};
firebase.initializeApp(config);
