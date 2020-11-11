<template>
  <v-app>
    <v-main class="pt-0">
      <v-container>
        <ValidationObserver ref="observer" v-slot="{ invalid }" immediate>
          <v-form @submit.prevent="registration" v-model="valid">
            <template v-if="invalid"> </template>
            <Student />
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
};
</script>
