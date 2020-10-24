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
              <Name/>
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
import { db } from '~/plugins/firebase.js'
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
    }
  },
  methods: {
    async registration() {
          const student = {
          familyName : this.familyName,
          firstName : this.firstName,
        }
        console.log(this.firstName)
        const studentsRef = db.collection('students').doc('生徒一覧')
        await studentsRef.add(student)
        // this.$router.push(`/`)
        this.familyName = ''
        this.firstName = ''
      }
  },
}
</script>