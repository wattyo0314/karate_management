<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-row justify="center">
              <v-icon class="ml-5">
                mdi-account
              </v-icon>
              <h1 class="ml-5">生徒管理</h1>
              <v-spacer></v-spacer>
              <v-btn to="/add" color="primary" class="mr-5">
              <v-icon>
                mdi mdi-account-plus
              </v-icon>
              </v-btn>
            </v-row>
            <v-divider color="blue"/>
          </v-col>
        </v-row>
          <v-row justify="center">
            <v-col cols="10">
              <v-data-table :headers="headers" dense :items="students">
                <template v-slot:body="{items: students}">
                  <tbody>
                    <tr v-for="(student, index) in students" :key="student.id">
                      <td  @click="detailData(index)">{{student.familyName}} {{student.firstName}}</td>
                      <td>{{student.familyNameKana}} {{student.firstNameKana}}</td>
                      <td>
                        <v-select
                        v-model="initial"
                        :items="level"
                        menu-props="auto"
                        label="保持級"
                        hide-details
                        single-line
                        style="width:150px;">
                        </v-select>
                      </td>
                      <td><v-icon @click="deleteData(index, student.familyName)">mdi-delete</v-icon></td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { db } from '~/plugins/firebase.js'
import { mapGetters,  mapActions } from 'vuex'

export default {
  
  data() {
    return {
      headers: [
        {
          text: '氏名',
          value: 'familyName' + 'firstName',
        },
        {
          text: 'フリガナ氏名',
          value: 'familyNameKana' + 'firstNameKana'
        },
        {
          text: '保有級',
          value: 'level'
        },
        {
          text: '年齢',
          value: 'age'
        },
        {
          text: '削除',
          value: 'delete',
          sortable: false,
        }
      ],
          familyName:'',
          firstName:'',
          familyNameKana: '',
          firstNameKana: '',
          familyName:'',
          firstName:'',
          familyNameKana: '',
          firstNameKana: '',
          familyName:'',
          firstName:'',
          familyNameKana: '',
          firstNameKana: '',
      initial: '無級',
      level: [
        '無級','10級','9級','8級','7級','6級','5級','4級','3級','2級','1級','初段','2段','3段','4段','5段','6段','7段'
      ]
    }
  },
  created: function () {
    this.$store.dispatch('setStudentsRef', db.collection('students'))
  },
  methods: {
    // age: function () {
    //   return moment().diff(this.birthday, 'years')
    // }
  },
  computed: {
    ...mapGetters({students: 'getStudents' })
  },
}
</script>
