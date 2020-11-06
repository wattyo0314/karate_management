<template>
  <v-app>
    <v-main>
      <v-container text-xs-center>
        <v-row>
          <v-col>
            <v-row>
              <v-icon class="ml-5">
                mdi-account
              </v-icon>
              <h1 class="ml-5">生徒一覧</h1>
              <v-spacer></v-spacer>
              <v-btn to="/add" color="primary" class="mr-5">
                <v-icon>
                  mdi mdi-account-plus
                </v-icon>
              </v-btn>
            </v-row>
            <v-divider color="blue" />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10">
            <v-data-table :headers="headers" dense :items="students">
              <template v-slot:body="{ items: students }">
                <tbody>
                  <tr v-for="student in students" :key="student.id">
                    <td>{{ student.familyName }} {{ student.firstName }}</td>
                    <td>{{ student.familyNameKana }} {{ student.firstNameKana }}</td>
                    <!-- <td>
                      <v-select
                        :items="level"
                        menu-props="auto"
                        hide-details
                        single-line
                        style="width:100px;"
                        @blur="fetchLevel(student.id)"
                      >
                      </v-select>
                    </td>
                    <td>{{ age }}歳</td> -->
                    <td>
                      <v-icon @click="deleteData(student.id)">mdi-delete</v-icon>
                    </td>
                    <td>
                      <nuxt-link :to="{ name: 'id', params: { id: student.id } }"
                        ><v-icon>mdi-contacts</v-icon></nuxt-link
                      >
                      <v-dialog v-model="dialog" v-if="studentName" max-width="50%" activator>
                        <v-card>
                          <v-row justify="center">
                            <v-card-title
                              >{{ studentName.familyName }}
                              {{ studentName.firstName }}を削除しますか？</v-card-title
                            >
                          </v-row>
                          <v-row justify="center">
                            <v-card-actions>
                              <v-btn color="primary" @click="deleteData(student.id)">はい</v-btn>
                              <v-btn @click="dialog = false">いいえ</v-btn>
                            </v-card-actions>
                          </v-row>
                        </v-card>
                      </v-dialog>
                    </td>
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
import moment from 'moment';
import { db } from '~/plugins/firebase.js';
import { mapGetters } from 'vuex';
const studentRef = db.collection('students');
export default {
  data() {
    return {
      headers: [
        {
          text: '氏名',
          value: 'familyName' + 'firstName',
          sortable: false,
        },
        {
          text: 'フリガナ氏名',
          value: 'familyNameKana' + 'firstNameKana',
          sortable: false,
        },
        // {
        //   text: '保有級',
        //   value: 'level',
        // },
        // {
        //   text: '年齢',
        //   value: 'age',
        // },
        {
          text: '削除',
          value: 'delete',
          sortable: false,
        },
        {
          text: '詳細',
          value: 'detail',
          sortable: false,
        },
      ],
      studentName: null,
      dialog: false,
      familyName: '',
      firstName: '',
      familyNameKana: '',
      firstNameKana: '',
      familyName: '',
      firstName: '',
      familyNameKana: '',
      firstNameKana: '',
      familyName: '',
      firstName: '',
      familyNameKana: '',
      firstNameKana: '',
      age: '',
      level: '',
      initial: '無級',
      level: [
        '無級',
        '10級',
        '9級',
        '8級',
        '7級',
        '6級',
        '5級',
        '4級',
        '3級',
        '2級',
        '1級',
        '初段',
        '2段',
        '3段',
        '4段',
        '5段',
        '6段',
        '7段',
      ],
    };
  },
  created() {
    this.$store.dispatch('setStudentsRef', db.collection('students'));
    // 年齢を計算 //
    studentRef.get().then(querySnapshot => {
      querySnapshot.forEach(birthDayDocSnapshot => {
        const birthDay = birthDayDocSnapshot.data().pickerDate;
        const today = moment();
        let y = Math.floor(moment.duration(today.diff(birthDay)).as('months') / 12);
        this.age = y;
      });
    });
  },
  methods: {
    deleteData(studentId) {
      this.$store.dispatch('deleteData', studentId);
    },
    removeBtn(student, studentId) {
      // let id = String(this.$route.params.id);
      // const studentId = this.$route.params.id;
      this.studentName = student;
      // studentRef.get().then(querySnapshot => {
      //   querySnapshot.forEach(doc => {
      //     console.log(doc.id);
      //     console.log(studentIndex);
      //     if (studentIndex != doc.id) return;
      //   });
      // });
      studentRef
        .doc(studentId)
        .get()
        .then(doc => {
          console.log(studentId);
          console.log(doc.id);
          if (studentId != doc.id) return;
        });
      this.dialog = true;
    },
    // fetchLevel(studentId) {
    //   const level = {
    //     level: this.level,
    //   };
    //   studentRef.doc(studentId).update({ level });
    // },
  },
  computed: {
    ...mapGetters({ students: 'getStudents' }),
  },
};
</script>
