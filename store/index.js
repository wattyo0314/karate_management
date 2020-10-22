import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
   students: [],
})

export const mutations = {
   ...vuexfireMutations
}

export const actions = {
   setStudentsRef: firestoreAction(({ bindFirestoreRef }, ref) => {
      bindFirestoreRef('students', ref)
   })
}

export const getters = {
   getStudents: (state) => {
      return state.students
   }
}