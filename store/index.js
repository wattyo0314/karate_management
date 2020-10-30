import { vuexfireMutations ,firestoreAction  } from 'vuexfire'
import 'firebase/firestore'
import firebase from '~/plugins/firebase.js'
// import {db} from '~/plugins/firebase.js'

const db = firebase.firestore()
const studentsRef = db.collection('students')

export const state = () => ({
   students: [],
   locale: 'ja'
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
   signUp: firestoreAction(( context, {familyName : familyName, firstName : firstName})=>{
      studentsRef.add({
         familyName: familyName,
         firstName: firstName,
         entranced: firestore.Timestamp.fromDate(new Date('2019/01/01')),
      })
   })
}
