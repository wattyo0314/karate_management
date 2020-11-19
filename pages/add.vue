<template>
  <v-app>
    <v-main class="pt-0">
      <v-container>
        <ValidationObserver ref="observer" v-slot="{ invalid }" immediate>
          <v-form @submit.prevent="registration" v-model="valid">
            <template v-if="invalid"> </template>
            <Student @change="add" />
            <v-row dense>
              <v-col justify="center" align="center">
                <v-btn type="submit" nuxt color="success" :disabled="invalid">送信</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </ValidationObserver>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import { db } from '~/plugins/firebase.js';
import firebase from '~/plugins/firebase.js';
import { ValidationObserver } from 'vee-validate';
import Student from '~/components/Student.vue';

export default {
  components: {
    ValidationObserver,
    Student,
  },
  data() {
    return {
      title: {
        title: '生徒登録',
      },
      valid: false,
    };
  },
  mounted() {
    this.$nuxt.$emit('updateTitle', this.title.title);
  },
  methods: {
    add(...data) {
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
      ] = data;
      this.familyName = familyName;
      this.firstName = firstName;
      this.familyNameKana = familyNameKana;
      this.firstNameKana = firstNameKana;
      this.parentsFirstName = parentsFirstName;
      this.parentsFamilyName = parentsFamilyName;
      this.parentsFirstNameKana = parentsFirstNameKana;
      this.gender = gender;
      this.relationship = relationship;
      this.date = date;
      this.pickerDate = pickerDate;
      this.phoneNumber = phoneNumber;
      this.zipcode = zipcode;
      this.address = address;
      this.building = building;
      this.message = message;
    },
    async registration() {
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
        date: this.date,
        pickerDate: this.pickerDate,
        phoneNumber: this.phoneNumber,
        address: this.address,
        zipcode: this.zipcode,
        building: this.building,
        message: this.message,
      };
      const studentsRef = db.collection('students');
      await studentsRef.add(student);
      this.familyName = '';
      this.firstName = '';
      this.familyNameKana = '';
      this.firstNameKana = '';
      this.parentsFirstNameKana = '';
      this.parentsFamilyName = '';
      this.parentsFirstName = '';
      this.gender = '';
      this.relationship = '';
      this.phoneNumber = '';
      this.date = null;
      this.address = '';
      this.zipcode = '';
      this.building = '';
      this.message = '';
      this.$router.push(`/`);
    },
  },
};
</script>
