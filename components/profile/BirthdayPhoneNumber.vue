<template>
  <v-row dense>
    <v-col cols="2" class="ml-5" >
    <!-- 生年月日入力 -->
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <ValidationProvider v-slot="{ errors, valid}" name="生年月日" rules="required">
            <v-badge left color="error" content="必須">
              <v-text-field
                label="生年月日"
                v-model="date"
                readonly
                v-on="on"
                :error-messages="errors"
                :success="valid"
              />
            </v-badge>
          </ValidationProvider>
        </template>
        <v-date-picker
        ref="picker"
        locale="jp-ja"
        v-model="date"
        :day-format="date => new Date(date).getDate()"
        :max="new Date().toISOString().substr(0, 10)"
        :picker-date="pickerDate"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="4"/>
    <v-col cols="2">  
  <!-- 連絡先入力 -->
      <ValidationProvider v-slot="{ errors, valid}" name="連絡先" rules="phone|required">
        <v-badge left color="error" content="必須">
          <v-text-field
          label="連絡先"
          outlined
          placeholder="00000000000"
          v-model="phoneNumber"
          :error-messages="errors"
          :success='valid' />
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
      pickerDate: '',
      phoneNumber: '',
      date: null,
      menu: false,
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
    save (date) {
      this.$refs.menu.save(date)
      // 再入力に備えて、入力が終わったら同期する
      this.pickerDate = date;
    },
  },
}
</script>