import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBT5kWZ4SZwuqxFIjYdwSbqRvba0FszWl8",
    authDomain: "ninja-smoothies-e0cb4.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-e0cb4.firebaseio.com",
    projectId: "ninja-smoothies-e0cb4",
    storageBucket: "ninja-smoothies-e0cb4.appspot.com",
    messagingSenderId: "44494337128",
    appId: "1:44494337128:web:0f0df14a54dec1c19137dd"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database
  export default firebaseApp.firestore();