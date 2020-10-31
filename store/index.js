import { vuexfireMutations ,firestoreAction  } from 'vuexfire'
import 'firebase/firestore'
import firebase from '~/plugins/firebase.js'



const db = firebase.firestore()
const studentsRef = db.collection('students')

export const state = () => ({
   students: [],
})

export const mutations = {
   ...vuexfireMutations
}

export const getters = {
   getStudents: state => {
      return state.students
   }
}


export const actions = {
   setStudentsRef: firestoreAction(({  bindFirestoreRef }, studentsRef) => {
      bindFirestoreRef('students', studentsRef)
   }),
   deleteData: firestoreAction((context,id) => {
      studentsRef.doc(id).delete()
   })
}
