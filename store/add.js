import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'

const db = firebase.firestore()
const studentsRef = db.collection('students')

export const state = () => ({
  stutents: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('students', ref)
  }),
}