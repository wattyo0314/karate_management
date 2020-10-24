<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-icon class="ml-5">
              mdi-account
              </v-icon>
              <h1 class="ml-5">生徒管理</h1>
              <v-divider color="primary"/>
              <v-spacer></v-spacer>
          </v-col>
        </v-row >
          <ValidationObserver ref="observer" v-slot="{ invalid }" immediate>
            <v-form  @submit.prevent="registration" v-model="valid">
              <Name/>
              <Kana />
              <GenderLilationship />
              <BirthdayPhoneNumber />
              <Address />
              <v-spacer />
              <Building />
              <Remark />
                <v-row dense>
                  <v-col justify="center" align="center">
                    <v-btn type="submit" nuxt @click="$router.push('/')" color="success" :disabled="invalid">送信</v-btn>
                  </v-col>
                </v-row>
            </v-form>
          </ValidationObserver>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { db } from '~/plugins/firebase.js'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import axiosJsonpAdapter from 'axios-jsonp'
const ZIPCODE_API_URL = 'http://zipcloud.ibsnet.co.jp/api/search'
export default {
  components : {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      familyName: '',
      firstName: '',
      familyNameKana:'',
      firstNameKana: '',
      parentsFirstNameKana:"",
      gender: null,
      date: null,
      menu: false,
      valid: false,
      zipcode: '',
      prefecture: '',
      address: '',
      building: '',
      pickerDate: '',
      phoneNumber: '',
      parentsFamilyName: '',
      parentsFirstName: '',
      relationship: '',
      message: '',
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (
        // 年から選ぶようにする
        this.$refs.picker.activePicker = 'YEAR',
        // 選び始めたら初期化
        this.pickerDate = null
      ))
    },

  },
  methods: {
    registration() {
        const student = {
          familyName : this.familyName,
          firstName : this.firstName,
          address: this.address,
          zipcode: this.zipcode,
          pickerDate: this.pickerDate,
          phoneNumber: this.phoneNumber,
          building: this.building,
          gender: this.gender,
          relationship: this.relationship,
          familyNameKana: this.familyNameKana,
          firstNameKana: this.firstNameKana,
          parentsFirstNameKana: this.parentsFirstNameKana,
          message: this.message,
          createdAt: firebase.firestore.Timestamp
        }
        const studentsRef = db.collection('students').doc()
        studentsRef.add(student)
        this.familyName = ''
        this.firstName = ''
        this.address = ''
        this.zipcode = ''
        this.pickerDate = ''
        this.phoneNumber = ''
        this.building = ''
        this.gender = ''
        this.relationship = ''
        this.familyNameKana = ''
        this.firstNameKana = ''
        this.parentsFirstNameKana = ''
        this.message = ''
      }
  },
}
</script>

<style lang="scss">
  v-text-field {
  min-height: 18px !important;
}
</style>