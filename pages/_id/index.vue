<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <v-card>
            <v-list dense>
              <v-list-item-group>
                <!-- 名前表示欄 -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">入門日</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.entranced | dateFilter }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">名前</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      <!-- <StudentName :familyName="this.familyName"> -->
                      {{ this.familyName }} {{ this.firstName }}
                      <!-- </StudentName> -->
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <!-- カナ表示欄 -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">名前カナ</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.familyNameKana }} {{ this.firstNameKana }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">性別</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title v-if="this.gender == 'male'">
                      男性
                    </v-list-item-title>
                    <v-list-item-title v-else>
                      女性
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">生年月日</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.date }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">郵便番号</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.zipcode }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">住所</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.address }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">建物名</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.building }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">連絡先</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.phoneNumber }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">保護者氏名</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.parentsFamilyName }} {{ this.parentsFirstName }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">保護者氏名カナ</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.familyNameKana }} {{ this.parentsFirstNameKana }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">続柄</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.relationship }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">備考欄</v-list-item-title>
                  </v-list-item-content>
                  <v-divider class="mx-4" vertical></v-divider>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ this.message }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="ml-5">
        <v-btn to="/" nuxt color="primary">戻る</v-btn>
        <v-btn :to="`/${studentId}/edit`" color="secondary" class="ml-5" nuxt>編集する</v-btn>
        <!-- <nuxt-link :to="{ name: 'id', params: { id: student.id } }"
            ><v-icon>mdi-contacts</v-icon></nuxt-link
          > -->
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import moment from 'moment';
import { db } from '~/plugins/firebase.js';
import { mapGetters } from 'vuex';
import StudentName from '~/pages/_id/edit/index.vue';
export default {
  data() {
    return {
      title: {
        title: '生徒情報',
      },
      firstName: '',
      familyName: '',
      firstNameKana: '',
      familyNameKana: '',
      gender: '',
      date: '',
      pickerDate: '',
      zipcode: '',
      address: '',
      building: '',
      phoneNumber: '',
      parentsFirstName: '',
      parentsFamilyName: '',
      parentsFirstNameKana: '',
      parentsFirstNameKana: '',
      relationship: '',
      message: '',
      entranced: '',
    };
  },
  created() {
    const studentId = this.$route.params.id;
    db.collection('students')
      .doc(studentId)
      .get()
      .then(doc => {
        const studentData = (doc.id, '=>', doc.data());
        this.firstName = studentData.firstName;
        this.familyName = studentData.familyName;
        this.familyNameKana = studentData.familyNameKana;
        this.firstNameKana = studentData.firstNameKana;
        this.gender = studentData.gender;
        this.date = studentData.date;
        this.pickerDate = studentData.pickerDate;
        this.zipcode = studentData.zipcode;
        this.address = studentData.address;
        this.building = studentData.building;
        this.phoneNumber = studentData.phoneNumber;
        this.parentsFamilyName = studentData.parentsFamilyName;
        this.parentsFirstName = studentData.parentsFirstName;
        this.parentsFamilyNameKana = studentData.parentsFamilyNameKana;
        this.parentsFirstNameKana = studentData.parentsFirstNameKana;
        this.relationship = studentData.relationship;
        this.message = studentData.message;
        this.entranced = studentData.entranced;
      });
  },
  mounted() {
    this.$nuxt.$emit('updateTitle', this.title.title);
  },
  methods: {},
  computed: {
    ...mapGetters({ students: 'getStudents' }),
    studentId() {
      return this.$route.params.id;
    },
  },
  filters: {
    dateFilter: function(date) {
      return moment(date).format('YYYY-MM-DD');
    },
  },
};
</script>
