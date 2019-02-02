import firebase from 'firebase'
  console.log('fire', firebase)
  const config = {
    apiKey: "AIzaSyBWHNLUVzDgWDxaO_-ps-d3Y5fEbasN5Hs",
    authDomain: "webseo28.firebaseapp.com",
    databaseURL: "https://webseo28.firebaseio.com",
    projectId: "webseo28",
    storageBucket: "webseo28.appspot.com",
    messagingSenderId: "591755014500"
  };
const fireAuth = firebase.initializeApp(config);

export default fireAuth