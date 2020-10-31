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
                  <tr v-for="(student, index) in students" :key="index">
                    <td>{{ student.familyName }} {{ student.firstName }}</td>
                    <td>{{ student.familyNameKana }} {{ student.firstNameKana }}</td>
                    <td>
                      <v-select
                        :items="level"
                        menu-props="auto"
                        hide-details
                        single-line
                        style="width:100px;"
                      >
                      </v-select>
                    </td>
                    <td>{{ age }}歳</td>
                    <v-dialog v-model="dialog" scrollable max-width="50%">
                      <template v-slot:activator="{ on }">
                        <td><v-icon v-on="on">mdi-delete</v-icon></td>
                      </template>
                      <v-card>
                        <v-row justify="center">
                          <v-card-title
                            >{{ student.familyName }}
                            {{ student.firstName }}を削除しますか？</v-card-title
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
                    <td>
                      <nuxt-link :to="{ name: 'id', params: { id: student.id } }"
                        ><v-icon>mdi-contacts</v-icon></nuxt-link
                      >
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
          value: 'familyNameKana' + 'firstNameKana',
        },
        {
          text: '保有級',
          value: 'level',
        },
        {
          text: '年齢',
          value: 'age',
        },
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
    const studentRef = db.collection('students');
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
      this.$store.dispatch('deleteData', { studentId });
    },
  },
  computed: {
    ...mapGetters({ students: 'getStudents' }),
  },
};
</script>
