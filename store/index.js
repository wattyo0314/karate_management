import { vuexfireMutations } from 'vuexfire'

export const state = () => ({
   students: [],
   familyName: '',
   firstName: '',
})

export const mutations = {
   ...vuexfireMutations
}

export const getters = {
   getStudents: (state) => {
      return state.students
   }
}