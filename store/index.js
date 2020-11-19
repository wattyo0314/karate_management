import { vuexfireMutations, firestoreAction } from 'vuexfire'
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
   setStudentsRef: firestoreAction(({ bindFirestoreRef }, studentsRef) => {
      bindFirestoreRef('students', studentsRef)
   }),
   registration: firestoreAction(({context}, {
      firstName,
      familyName,
      familyNameKana,
      firstNameKana,
      parentsFirstNameKana,
      gender,
      relationship,
      pickerDate,
      phoneNumber,
      address,
      zipcode,
      building,
      message,
   }) => {
      const studentData =
      'firstName:'+ firstName
      'familyName:' + familyName,
      'familyNameKana:' + familyNameKana,
      'firstNameKana:' + firstNameKana,
      'parentsFirstNameKana:' + parentsFirstNameKana,
      'gender:' + gender,
      'relationship:' + relationship,
      'pickerDate:' + pickerDate,
      'phoneNumber:' + phoneNumber,
      'address:' + address,
      'zipcode:' + zipcode,
      'building:' + building,
      'message:' + message,
      studentsRef.add({
         studentData,
         'entranced': firebase.firestore.FieldValue.serverTimestamp()
      })
   }),
   deleteData: firestoreAction((context, id) => {
      return studentsRef.doc(id).delete()
   }),
   // fetchLevel: firestoreAction((context,id) => {
      //    return studentsRef.doc(id).update({
         //       level: level
         //    })
         // })
}