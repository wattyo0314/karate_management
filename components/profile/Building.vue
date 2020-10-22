<template>
<v-row dense>
  <v-col cols="5" class="ml-5">
    <!-- 建物名・マンション名入力 -->
    <ValidationProvider v-slot="{ errors, valid}" name="建物名・マンション名" rules="zenkaku">
      <v-badge left color="grey lighten-1" content="任意">
        <v-text-field
        label="建物名・マンション名"
        outlined
        placeholder="〇〇マンション101号室"
        v-model="building"
        :error-messages="errors"
        :success='valid'
        style="width:365px;"/>
      </v-badge>
    </ValidationProvider>
  </v-col>
</v-row>
</template>

<script>
export default {
  data() {
    return {
      building: '',
    }
  },
}
</script>