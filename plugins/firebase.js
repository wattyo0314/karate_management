import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDRKz570GMLlCQ0TXmr80szY6ApOBUTfAE",
  authDomain: "karatemanagement-e9371.firebaseapp.com",
  databaseURL: "https://karatemanagement-e9371.firebaseio.com",
  projectId: "karatemanagement-e9371",
  storageBucket: "karatemanagement-e9371.appspot.com",
  messagingSenderId: "96935958010",
  appId: "1:96935958010:web:fedea72702bc8e1b918043",
  measurementId: "G-8NDPNQH6YR"
};


firebase.initializeApp(firebaseConfig);
export default firebase;
const db = firebase.firestore();
export { db }