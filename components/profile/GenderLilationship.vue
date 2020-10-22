<template>
  <v-row dense>
    <v-col cols="6" class="ml-5">
      <!-- 入力 -->
      <ValidationProvider v-slot="{ errors, valid}" name="性別" rules="required">
        <v-badge left color="error" content="必須">
          <v-radio-group
          v-model="gender"
          required
          :error-messages="errors"
          :success="valid"
          row>
            <template v-slot:label>
              <div>性別：</div>
            </template>
            <v-radio value="male">
            <template v-slot:label>
              <div>男性</div>
            </template>
            </v-radio>
            <v-radio value="famale">
            <template v-slot:label>
              <div>女性</div>
            </template>
            </v-radio>
          </v-radio-group>
        </v-badge>
      </ValidationProvider>
    </v-col>
    <v-col cols="2">
      <!-- 続柄入力 -->
        <ValidationProvider v-slot="{ errors, valid}" name="続柄" rules="required|zenkaku">
          <v-badge left color="error" content="必須">
            <v-text-field
            label="続柄"
            outlined
            placeholder="父"
            v-model="relationship"
            required
            :error-messages="errors"
            :success='valid'/>
          </v-badge>
        </ValidationProvider>
      </v-col>
      <v-spacer/>
    </v-row>
</template>

<script>
export default {
  data() {
    return {
      gender: '',
      relationship: '',
    }
  },
}
</script>