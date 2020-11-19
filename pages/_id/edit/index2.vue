<template>
  <div>
    <v-app>
      <v-main class="pt=0">
        <v-container>
          <ValidationObserver ref="observer" v-slot="{ invalid }" immediate>
            <v-form @submit.prevent="update" v-model="valid">
              <template v-if="invalid"> </template>
              <!-- <v-row class="ml-5 mt-1" dense> -->
              <!-- <v-col cols="2"> 入門日:{{ entranced }} </v-col>
            </v-row> -->
              <Student @change="update" :data="familyName" />
              <v-row dense>
                <v-col justify="center" align="center">
                  <v-btn type="submit" nuxt color="success" :disabled="invalid">更新する</v-btn>
                  <v-btn :to="`/${studentId}`" nuxt color="success" :disabled="invalid">戻る</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </ValidationObserver>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axiosJsonpAdapter from 'axios-jsonp';
const ZIPCODE_API_URL = 'http://zipcloud.ibsnet.co.jp/api/search';
import { mapActions, mapGetters } from 'vuex';
import { db } from '~/plugins/firebase.js';
import firebase from '~/plugins/firebase.js';
import { ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
  },
  data() {
    return {
      title: {
        title: '生徒更新',
      },
      valid: false,
      firstName: this.firstName,
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
        this.pickerDate = studentData.pickerDate;
        this.date = studentData.date;
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

  methods: {
    async update(...emitdata) {
      const [
        familyName,
        firstName,
        familyNameKana,
        firstNameKana,
        parentsFirstName,
        parentsFamilyName,
        parentsFirstNameKana,
        gender,
        relationship,
        date,
        pickerDate,
        phoneNumber,
        zipcode,
        address,
        building,
        message,
      ] = emitdata;
      const studentId = this.$route.params.id;
      const student = {
        familyName: this.familyName,
        firstName: this.firstName,
        familyNameKana: this.familyNameKana,
        firstNameKana: this.firstNameKana,
        parentsFirstName: this.parentsFirstName,
        parentsFamilyName: this.parentsFamilyName,
        parentsFirstNameKana: this.parentsFirstNameKana,
        gender: this.gender,
        relationship: this.relationship,
        pickerDate: this.pickerDate,
        date: this.date,
        phoneNumber: this.phoneNumber,
        address: this.address,
        zipcode: this.zipcode,
        building: this.building,
        message: this.message,
      };
      const studentsRef = db.collection('students').doc(studentId);
      await studentsRef.update(student);
      console.log(student);
      this.$router.push(`/`);
    },
  },
  computed: {
    // 入門日を記載する
    ...mapGetters({ students: 'getStudents' }),
    studentId() {
      return this.$route.params.id;
    },
  },
};
</script>
