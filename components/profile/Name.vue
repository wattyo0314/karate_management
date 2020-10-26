<template>
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
</template>

<script>
export default {
  data() {
    return {
      familyName: '',
      firstName: '',
      parentsFamilyName: '',
      parentsFirstName: '',
    }
  },
  created() {
    this.sendName();
  },
  methods: {
    sendName () {
      this.$emit('send_name', {familyName: 'familyName', firstName: 'firstName'});
    }
  }
}
</script>

