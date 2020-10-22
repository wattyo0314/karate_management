<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-layout justify-center>
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
            </v-layout>
            <v-divider color="blue"/>
          </v-col>
        </v-row>
        <v-row>
          <v-layout justify-center>
            <v-col cols="10">
              <v-data-table :headers="headers" dense :items="students">
                <template v-slot:body="{items: students}">
                  <tbody>
                    <tr v-for="student of students" :key="student.id">
                      <td>{{student.familyName}} {{student.firstName}}</td>
                      <td>{{student.familyNameKana}} {{student.firstNameKana}}</td>
                      <td><v-select
                        v-model="initial"
                        :items="level"
                        menu-props="auto"
                        label="保持級"
                        hide-details
                        single-line
                        style="width:150px;">
                        </v-select></td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
            </v-col>
          </v-layout>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


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
        }
      ],
      students: [
        {
          familyName:'渡邊',
          firstName:'佐資',
          familyNameKana: 'ワタナベ',
          firstNameKana: 'サスケ',
          
        },
        {
          name:'渡邊佑資',
          furigana: 'ワタナベユウシ',
         
        },
        {
          name:'渡邊仁美',
          furigana: 'ワタナベヒトミ',
          
        },
      ],
      initial: '無級',
      level: [
        '無級','10級','9級','8級','7級','6級','5級','4級','3級','2級','1級','初段','2段','3段','4段','5段','6段','7段'
      ]
    }
  },
  methods: {
    // age: function () {
    //   return moment().diff(this.birthday, 'years')
    // }
  }
}
</script>
