<template>
  <v-row class="ml-5" dense>
    <v-col cols="2">
      <!-- 道場生姓名フリガナ入力 -->
      <ValidationProvider v-slot="{ errors, valid }" name="フリガナ" rules="required|katakana">
        <v-badge left color="error" content="必須">
          <v-text-field
          label="フリガナ"
          outlined
          placeholder="タナカ"
          v-model="familyNameKana"
          required
          :error-messages="errors"
          :success='valid'/>
        </v-badge>
      </ValidationProvider>
    </v-col>
    <v-col cols="2">
      <ValidationProvider v-slot="{ errors, valid}" name="フリガナ" rules="required|katakana">
        <v-text-field
        label="フリガナ"
        outlined placeholder="タロウ"
        v-model="firstNameKana"
        required
        :error-messages="errors"
        :success='valid'/>
      </ValidationProvider>
    </v-col>
    <v-col cols="2"/>
    <v-col cols="2">
      <!-- 道場生姓名フリガナ入力 -->
      <ValidationProvider v-slot="{ errors, valid}" name="フリガナ" rules="required|katakana">
        <v-badge left color="error" content="必須">
          <v-text-field
          label="フリガナ"
          outlined
          placeholder="タナカ"
          v-model="familyNameKana"
          required
          :error-messages="errors"
          :success='valid'/>
        </v-badge>
      </ValidationProvider>
    </v-col>
    <v-col cols="2">
      <ValidationProvider v-slot="{ errors, valid}" name="フリガナ" rules="required|katakana">
        <v-text-field
        label="フリガナ"
        outlined placeholder="タロウ"
        v-model="parentsFirstNameKana"
        required
        :error-messages="errors"
        :success='valid'/>
      </ValidationProvider>
    </v-col>
    <v-spacer/>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      familyNameKana:'',
      firstNameKana: '',
      parentsFirstNameKana:"",
    }
  },
}
</script>