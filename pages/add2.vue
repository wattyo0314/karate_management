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
            </v-row>
            <v-divider color="blue"/>
          </v-col>
        </v-row>
          <ValidationObserver ref="observer" v-slot="{ invalid }" immediate>
            <v-form  @submit.prevent="registration" v-model="valid">
             <!-- <Name @send_name='sendName' /> -->
             <v-row class="ml-5 mt-1" dense>
    <!-- 道場生の姓名入力 -->
    <v-col cols="2">
      <ValidationProvider v-slot="{ errors, valid}" name="姓" rules="required|zenkaku">
        <v-badge left color="error" content="必須">
          <v-text-field
          label="姓"
          outlined
          placeholder="田中"
          v-model="familyName"
          required
          :error-messages="errors"
          :success="valid"/>
        </v-badge>
      </ValidationProvider>
    </v-col>
    <v-col cols="2">
      <ValidationProvider v-slot="{ errors, valid }" name="名" rules="required|zenkaku">
          <v-text-field
          label="名"
          outlined
          placeholder="太郎"
          v-model="firstName"
          required
          :error-messages="errors"
          :success="valid"/>
      </ValidationProvider>
    </v-col>
    <v-col/>
    <!-- 保護者氏名入力 -->
    <v-col cols="2">
      <ValidationProvider v-slot="{ errors, valid}" name="保護者姓" rules="required|zenkaku">
        <v-badge left color="error" content="必須">
          <v-text-field
          label="保護者姓"
          outlined
          placeholder="田中"
          v-model="parentsFamilyName"
          required
          :error-messages="errors"
          :success="valid"/>
        </v-badge>
      </ValidationProvider>
    </v-col>
    <v-col cols="2">
      <ValidationProvider v-slot="{ errors, valid}" name="保護者名" rules="required|zenkaku">
        <v-text-field
        label="保護者名"
        outlined
        placeholder="次郎"
        v-model="parentsFirstName"
        required
        :error-messages="errors"
        :success='valid'/>
      </ValidationProvider>
    </v-col>
    <v-col/>
  </v-row>
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
import { mapActions } from 'vuex'
import {db}  from '~/plugins/firebase.js'
import firebase  from '~/plugins/firebase.js'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Name from '~/components/profile/Name.vue'
export default {
  components : {
    ValidationObserver,
    ValidationProvider,
    Name
  },
  data() {
    return {
      valid: false,
      familyName: '',
      firstName: '',
      parentsFamilyName: '',
      parentsFirstName: '',
    }
  },
  // created: {
  //   sendName() {
  //     return ({firstName: this.firstName, familyName:this.familyName})
  //   }
  // },
  methods: {
      async registration() {
          const student = {
            familyName: this.familyName,
            firstName: this.firstName,
            // entranced: firestore.Timestamp.fromDate(new Date('2019/01/01')),
        }
        const studentsRef =  db.collection('students')
        await studentsRef.add(student)
        // await this.$store.dispatch('signUp',{firstName:this.firstName, familyName:this.familyName})
        this.familyName = ''
        this.firstName = ''
        this.$router.push(`/`)
      },
      
  },
}
</script>