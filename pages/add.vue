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
              <h1 class="ml-5">生徒登録</h1>
              <v-spacer></v-spacer>
            </v-row>
            <v-divider color="blue"/>
          </v-col>
        </v-row>
          <ValidationObserver ref="observer" v-slot="{ invalid }" immediate>
            <v-form @submit.prevent="registration" v-model="valid">
              <Name @parentMethod="updateMessage" />
              <Kana />
              <GenderLilationship />
              <BirthdayPhoneNumber />
              <Address />
              <v-spacer />
              <Building />
              <Remark />
                <v-row dense>
                  <v-col justify="center" align="center">
                    <v-btn type="submit" to="/" nuxt color="success" :disabled="invalid">送信</v-btn>
                  </v-col>
                </v-row>
            </v-form>
        </ValidationObserver>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Name from '~/components/profile/Name.vue'
import Kana from '~/components/profile/Kana.vue'
import GenderLilationship from '~/components/profile/GenderLilationship.vue'
import BirthdayPhoneNumber from '~/components/profile/BirthdayPhoneNumber.vue'
import Address from '~/components/profile/Address.vue'
import Building from '~/components/profile/Building.vue'
import Remark from '~/components/profile/Remark.vue'
export default {
  components : {
    ValidationObserver,
    ValidationProvider,
    Name,
    Kana,
    GenderLilationship,
    BirthdayPhoneNumber,
    Address,
    Building,
    Remark
  },
  data() {
    return {
      valid: false,
    }
  },
  methods: {
    registration: function () {
      const students = {
        updateMessage (familyName) {
        familyName: this.familyName
        },
        firstName: this.firstName,
        familyNameKana: this.familyNameKana,
        firstNameKana: this.firstNameKana,
        parentsFirstNameKana: this.parentsFirstNameKana,
        gender: this.gender,
        date: this.date,
        zipcode: this.zipcode,
        prefecture: this.prefecture,
        address: this.address,
        building: this.building,
        pickerDate: this.pickerDate,
        phoneNumber: this.phoneNumber,
        parentsFamilyName: this.parentsFamilyName,
        parentsFirstName: this.parentsFirstName,
        relationship: this.relationship,
        message: this.message,
      }
      const studentsRef = db.collection('students')
      studentsRef.add(students)
      familyName: ''
      firstName: ''
      familyNameKana:''
      firstNameKana: ''
      parentsFirstNameKana:""
      gender: ''
      date: null
      zipcode: ''
      prefecture: ''
      address: ''
      building: ''
      pickerDate: ''
      phoneNumber: ''
      parentsFamilyName: ''
      parentsFirstName: ''
      relationship: ''
      message: ''
    }
  },
}
</script>