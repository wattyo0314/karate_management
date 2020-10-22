import firebase from "firebase/app"
import 'firebase/firestore'
const serviceAccount = require('~/serviceAccountKey.json')

firebase.initializeApp({ ...serviceAccount })
const db = firebase.firestore()
export { db }