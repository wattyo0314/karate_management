<template>
  <v-col>
    <ValidationProvider v-slot="{ errors, valid}" name="備考欄" rules="zenkaku">
      <v-badge left color="grey lighten-1" content="任意">
        <!-- 備考欄入力 -->
        <v-textarea
        label="備考欄"
        outlined
        placeholder="例）喘息持ちです"
        v-model="message"
        :error-messages="errors"
        :success="valid"
        style="width:365px;"  />
      </v-badge>
    </ValidationProvider>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
}
</script>